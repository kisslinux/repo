## Adding packages to this repo

In general, to add any package to this repo, you need to submit it to
`public`. You can see our packaging system
[here.](https://kissx.github.io/pages/package-system)

### Committing your changes

In general, only do one commit per package changed, unless the packages involved are closely related or came from a single URL, like `linux` and `linux-headers`.

There are some rules for commit messages:

* For new packages: `<package>: new package at <version>`
* For updating an existing package: `<package>: update to <version>`, `<package>: bump to <version>` is also acceptable.
* Any other changes: `<package>: <changes>`
* Merges: GitHub's default format is acceptable, or just `Merge #<PR number>` should suffice.
* Misc: We leave that to the discretion of the author and/or committer.

### Making a pull request

Make sure the packages are successfully built in your system first before making any PRs to this repo.

Most pull request should only contain a single package and its dependencies which are not part of this repo.

Unless stated otherwise, all packages must be put in `public`.

### Travis

All packages submitted will be checked in Travis, any packages that don't pass the check will not be merged.
