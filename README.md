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

Now you can run tests, build the application and depending on your editor / IDE you can debug the application.

To run the test file run;

```bash
$ pnpm test
```

To build and run the application run these;

```bash
$ pnpm build
$ node ./dist/index.js
```

to see the output;

> Hello, world!

DO NOT forget to delete the `dist` directory before debugging (see Remarks #1);

```bash
$ rm -rf ./dist
```

Read on if you are using VSCode / VSCodium as your IDE;

```bash
$ code .
```

open `src/index.ts` and put a breakpoint on line 3. Then open the Debug Panel (Cmd+Shift+D on macOS, Ctrl+Shift+D on Windows), select "dev" launch setting, and start debugging (F5).

Rest is in your hands. It's up to you what you'll build...

## Remarks

1. Delete build directory (i.e. "dist") before debugging or running tests.

## Known Issues

* Currently cannot run "lint" script due to;
  > WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.
  >
  > SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <5.2.0
  >
  > YOUR TYPESCRIPT VERSION: 5.3.3
