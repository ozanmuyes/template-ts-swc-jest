# template-ts-swc-jest

A template for a TypeScript Node.js application using SWC, Jest, ESLint, Prettier

Although the repo has "pnpm-lock.yaml" you can use `npm` or `yarn` to install
dependencies; just be sure correct version of dependencies is installed.

The repo has VSCode support; among other things you can start debugging with
environment variables set, see ".vscode/.env" file.

## After Cloning / Using the Template

First of all `cd` into the project root. There we have to install the development dependencies via;

```bash
$ pnpm install
```

You can, of course, use `npm` or `yarn` instead.

Now you can run tests, build the application and depending on your editor / IDE you can debug the application (with some ceveats).

For example just run these;
```bash
$ pnpm build
$ node ./dist/index.js
```

to see the output;

> Hello, world!

DO NOT forget to delete the `dist` directory before debugging.

## Remarks

* Delete build directory (i.e. "dist") before debugging or running tests.

## Known Issues

* Currently cannot run "lint" script due to;
  > WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.
  >
  > SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <5.2.0
  >
  > YOUR TYPESCRIPT VERSION: 5.3.3
* VSCode / VSCodium debugger WILL NOT stop at `debugger` statements
* VSCode / VSCodium debugger will hit the correct breakpoint position on _compiled_ (JS) file. Which is not intended.
