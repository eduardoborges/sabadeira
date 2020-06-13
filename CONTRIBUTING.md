# Contributing

Please read this doc before start to use this repo. We have a set of guidelines that should be followed.

Feel free to propose changes to this document using a pull request.

## Code patterns

### You need

* Node >= `v12`

### Available Scripts

```shell
$ npm start            # run app in development mode with mocks

# env scripts
$ npm run dev:env:dev  # set env variables to development
$ npm run dev:env:stg  # set env variables to staging
$ npm run dev:env:prod # set env variables to production

# build env scripts∆∆
$ npm run build          # buid for production
$ npm run build:env:dev  # set env variables to development
$ npm run build:env:stg  # set env variables to staging
$ npm run build:env:prod # set env variables to production

# test scripts
$ npm run test           # exec unit tests once
$ npm run test:watch     # exec unit watch mode
$ npm run coverage       # check code coverage
```

### Git Workflow

We use [GitFlow](http://nvie.com/posts/a-successful-git-branching-model/).

### Branching

* ```feature/feature-name``` to new features.
* ```fix/bug-name``` to fix bugs.
* ```improvement/improvement-name``` to improvement code.

### Commit messages

* We use [Conventional Commits](https://www.conventionalcommits.org/) pattern.
* Just type `git commit` and you be guided to commit wizard.

Like this:

```bash
  <type>(optional scope): <description>

  [optional body]

  [optional footer(s)]
```

Commit exemple:

```bash
feat(parser): add ability to parse arrays
```

### Pull Requests

All Pull Request must be made to the `develop branch`.

Before opening a Pull Request, verify if all unit tests passed,
we have CI tools to run tests, if it fails [you will be notified](https://www.youtube.com/watch?v=mmLRTVYgEq4).

### Releasing a new version

Currently, the release proccess requires you to:

1. Open a release branch, following gitflow branching conventions (`release/vx.x.x`), from `develop branch`.
2. Run the `npm run version-bump` command.
3. Update the version in the main `package.json`.
4. Update the CHANGELOG (change Unreleased to the version, link and date).
5. Commit.
6. Create a tag (`git tag -a vx.x.x`)
7. Push a tag.
8. Push the release branch.
9. Create pull request against the `develop branch` and the `master branch`.

### Changelog Guiding Principles

Changelogs are for humans, not machines.
There should be an entry for every single version.
The same types of changes should be grouped.
Versions and sections should be linkable.
The latest version comes first.
The release date of each version is displayed.
Mention whether you follow Semantic Versioning.
Types of changes

**ADDED** for new features.
**CHANGED** for changes in existing functionality.
**DEPRECATED** for soon-to-be removed features.
**REMOVED** for now removed features.
**FIXED** for any bug fixes.
**SECURITY** in case of vulnerabilities.
