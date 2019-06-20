#!/bin/sh

PATH=/usr/bin:/usr/sbin

log() {
    printf '\e[31;1m=>\e[m %s\n' "$@"
}

mnt() {
    mountpoint -q "$1" || {
        dir=$1
        shift
        mount "$@" "$dir"
    }
}

log "Welcome to KISS!"
log "Mounting pseudo filesystems..."

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
mnt /sys/kernel/security                      -nt securityfs securityfs
