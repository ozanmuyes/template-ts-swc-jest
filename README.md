# template-ts-swc-jest

A template for a TypeScript Node.js application using SWC, Jest, ESLint, Prettier

Although the repo has "pnpm-lock.yaml" you can use `npm` or `yarn` to install
dependencies; just be sure correct version of dependencies is installed.

The repo has VSCode support; among other things you can start debugging with
environment variables set, see ".vscode/.env" file.

## Remarks

* Delete build directory (i.e. "dist") before debugging or running tests.

## Known Issues

* Currently cannot run "lint" script due to;
  > WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.
  >
  > SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <5.2.0
  >
  > YOUR TYPESCRIPT VERSION: 5.3.3
