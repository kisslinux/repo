# KISS Package System

The package system was built specifically for KISS and employs a UNIX-like file model. Instead of the typical shell script with variables, arrays and functions; this system uses easily parseable plain text files.

The data in each file is separated by lines and spaces. The repository and packages can be manipulated and read using any programming language. The build script (for each package) can be written in whatever language you desire.

More information: <https://getkiss.org/pages/package-system/>


## Index

<!-- vim-markdown-toc GFM -->

* [Adding packages to this repository](#adding-packages-to-this-repository)
* [Example package](#example-package)
* [Generating checksums](#generating-checksums)
* [Committing changes](#committing-changes)
* [Pull requests](#pull-requests)
* [Linting](#linting)

<!-- vim-markdown-toc -->

## Adding packages to this repository

Unless for a good reason, new packages go in `public`. The `core`, `extra` and `xorg` repositories are updated on a case by case basis.

- `core`: Contains just enough to rebuild itself and any additional packages.
- `extra`: Contains essential packages which do not belong in `core`.
- `xorg`: Contains everything `xorg` related for a working `xorg-server`.
- `testing`: Contains packages which aren't ready for wide usage yet.
- `public`: Everything else.

When a package is added to `public` it is assumed that the **first** committer is now the maintainer of said package. The other repositories are maintained by the KISS developers themselves.


## Example package

A simple package to use as a reference is `file`. It has dependencies and uses the GNU configure style (*which a lot of packages use*).

https://github.com/kisslinux/repo/tree/master/core/file


## Generating checksums

Once you have packaged something (*and before the first build*) run `kiss checksum pkg` to generate checksums for the package.


## Committing changes

One package per commit unless the packages are very closely related (`linux` and `linux-headers`).

Commit rules:

* **New packages**: `<package>: new package at <version>`
* **Existing packages**: `<package>: update to <version>`, `<package>: bump to <version>` is also acceptable.
* **Other package changes**: `<package>: <changes>`
* **Merges**: GitHub's default format is acceptable, or just `Merge #<PR number>` should suffice.
* **Misc**: We leave that to the discretion of the author and/or committer.


## Pull requests

Ensure that the package builds successfully on your system before creating a pull request. If for some reason it **does not**, open an issue if assistance is needed.


## Linting

All package `build` and `post-install` scripts are subject to checks using `shellcheck`. Packages must pass the linter to be accepted into the repository. Exceptions can be made using `shellcheck disable=SCXXXX` with good reason.
