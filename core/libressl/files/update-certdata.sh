#!/bin/sh -e
#
# update-certdata.sh

[ -w /etc/ssl ] || {
    printf '%s\n' "${0##*/}: root required to update cert." >&2
    exit 1
}

cd /etc/ssl && {
    wget https://curl.haxx.se/ca/cacert.pem
    mv -f cacert.pem cert.pem
    printf '%s\n' "${0##*/}: updated cert.pm"
}
