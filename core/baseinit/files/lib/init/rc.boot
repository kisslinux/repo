#!/bin/sh

log() {
    printf '\033[31;1m=>\033[m %s\n' "$@"
}

mnt() {
    mountpoint -q "$1" || {
        dir=$1
        shift
        mount "$@" "$dir"
    }
}

emergency_shell() {
    log "" \
        "Init system encountered an error, starting emergency shell." \
        "When ready, type 'exit' to continue the boot."

    /bin/sh -l
}

main() {
    PATH=/usr/bin:/usr/sbin
    old_ifs=$IFS
    set -f

    log "Welcome to KISS $(uname -sr)!"

    log "Mounting pseudo filesystems..."; {
        mnt /proc -o nosuid,noexec,nodev    -t proc     proc
        mnt /sys  -o nosuid,noexec,nodev    -t sysfs    sys
        mnt /run  -o mode=0755,nosuid,nodev -t tmpfs    run
        mnt /dev  -o mode=0755,nosuid       -t devtmpfs dev

        # shellcheck disable=2174
        mkdir -pm 0755 /run/runit \
                       /run/lvm   \
                       /run/user  \
                       /run/lock  \
                       /run/log   \
                       /dev/pts   \
                       /dev/shm

        mnt /dev/pts -o mode=0620,gid=5,nosuid,noexec -nt devpts     devpts
        mnt /dev/shm -o mode=1777,nosuid,nodev        -nt tmpfs      shm
    }

    log "Starting eudev..."; {
        command -v udevd >/dev/null && {
            udevd --daemon
            udevadm trigger --action=add --type=subsystems
            udevadm trigger --action=add --type=devices
            udevadm settle
        }
    }

    log "Remounting rootfs as ro..."; {
        mount -o remount,ro / || emergency_shell
    }

    log "Activating encrypted devices (if any exist)..."; {
        [ -e /etc/crypttab ] && [ -x /bin/cryptsetup ] && {
            exec 3<&0

            # shellcheck disable=2086
            while read -r name dev pass opts err; do
                # Skip comments.
                [ "${name##\#*}" ] || continue

                # Break on invalid crypttab.
                [ "$err" ] && {
                    printf 'error: A valid crypttab has only 4 columns.\n'
                    break
                }

                # Turn 'UUID=*' lines into device names.
                [ "${dev##UUID*}" ] || dev=$(blkid -l -o device -t "$dev")

                # Parse options by turning list into a pseudo array.
                IFS=,
                set -- $opts
                IFS=$old_ifs

                copts="cryptsetup luksOpen"

                # Create an argument list (no other way to do this in sh).
                for opt; do case $opt in
                    discard)            copts="$copts --allow-discards" ;;
                    readonly|read-only) copts="$copts -r" ;;
                    tries=*)            copts="$copts -T ${opt##*=}" ;;
                esac; done

                # If password is 'none', '-' or empty ask for it.
                case $pass in
                    none|-|"") $copts "$dev" "$name" <&3 ;;
                    *)         $copts -d "$pass" "$dev" "$name" ;;
                esac
            done < /etc/crypttab

            exec 3>&-

            [ "$copts" ] && [ -x /bin/vgchance ] && {
                log "Activating LVM devices for dm-crypt..."
                vgchange --sysinit -a y || emergency_shell
            }
        }
    }

    log "Checking filesystems..."; {
        fsck -ATat noopts=_netdev
        [ $? -gt 1 ] && emergency_shell
    }

    log "Mounting rootfs rw..."; {
        mount -o remount,rw / || emergency_shell
    }

    log "Mounting all local filesystems..."; {
        mount -at nosysfs,nonfs,nonfs4,nosmbfs,nocifs -O no_netdev ||
            emergency_shell
    }

    log "Enabling swap..."; {
        swapon -a || emergency_shell
    }

    log "Seeding random..."; {
        if [ -f /var/random.seed ]; then
            cat /var/random.seed > /dev/urandom
        else
            log "This may hang."
            log "Mash the keyboard to generate entropy..."

            dd count=1 bs=512 if=/dev/random of=/var/random.seed
        fi
    }

    log "Setting up loopback..."; {
        ip link set up dev lo
    }

    log "Setting hostname..."; {
        read -r hostname < /etc/hostname
        printf '%s\n' "${hostname:-KISS}" > /proc/sys/kernel/hostname
    } 2>/dev/null

    log "Loading sysctl settings..."; {
        find /run/sysctl.d \
             /etc/sysctl.d \
             /usr/local/lib/sysctl.d \
             /usr/lib/sysctl.d \
             /lib/sysctl.d \
             /etc/sysctl.conf \
             -name \*.conf -type f 2>/dev/null \
        | while read -r conf; do
            seen="$seen ${conf##*/}"

            case $seen in
                *" ${conf##*/} "*) ;;
                *) printf '%s\n' "* Applying $conf ..."
                   sysctl -p "$conf" ;;
            esac
        done
    }

    log "Loading rc.conf (if it exists)..."; {
        [ -f "/etc/rc.conf" ] && . /etc/rc.conf
    }

    log "Running /etc/rc.d hooks (if any exist)..."; {
        for file in /etc/rc.d/*.sh; do
            . "$file"
        done
    }

    command -v udevd >/dev/null &&
        udevadm control --exit

    log "Boot stage complete..."
}

main

echo this works
[ -f "/etc/rc.conf" ] && . /etc/rc.conf
# . /etc/rc.d/sinit_getty.sh
# . /etc/rc.d/sinit_runit.sh

echo below doesnt work why
for file in /etc/rc.d/*.sh; do
    [ -r "$file" ] && . "$file"
done || sh -l
