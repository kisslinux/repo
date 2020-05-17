#!/bin/sh -e

[ -w /etc/ssl ] || {
    printf '%s\n' "${0##*/}: root required to update cert." >&2
    exit 1
}

cd /etc/ssl && {
    curl -LO https://curl.haxx.se/ca/cacert.pem
    mv -f cacert.pem cert.pem
    printf '%s\n' "${0##*/}: updated cert.pem"
}
