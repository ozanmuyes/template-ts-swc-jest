# template-ts-swc-jest

A template repository to kick-start a TypeScript Node.js application using SWC, Jest, ESLint, Prettier.

Although the repo has "pnpm-lock.yaml" you can use `npm` or `yarn` to install
dependencies; just be sure **correct version of dependencies** were installed (you can manually cross-check against "pnpm-lock.yaml").

The repo has VSCode support; among other things you can start debugging with
environment variables set, see [".vscode/.env.example"](./.vscode/.env.example) file.

## Getting Started

You can clone this (template) repository (_discouraged_) or click the "Use Template" button to create a new repository using this (template) repository. By doing so you have created a new repository.

Just DO NOT forget to change the origin to suit your needs - so that you won't develop this (template) repository but instead your copy of this (template) repository.

<!-- TODO degit -->

<!-- TODO stackblitz -->

## After Cloning / Using the Template

First of all `cd` into the project root. There we have to install the development dependencies via;

```bash
$ pnpm install
```

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

DO NOT forget to delete the `dist` directory before debugging (see Remarks #2);

```bash
$ rm -rf ./dist
```

Read on if you are using VSCode / VSCodium as your IDE;

```bash
$ code .
```

open `src/index.ts` and put a breakpoint on line 3. Then open the Debug Panel (Cmd+Shift+D on macOS, Ctrl+Shift+D on Windows), select "dev" launch configuration, and start debugging (F5).
Inspect variable, see the stack trace, it is debugging you know.
Now stop the debugger (Shift+F5).

Rest is in your hands; to implement, to develop. It's up to you what you'll build...

<!-- If you want to experience something different give a try to [ozanmuyes/template-clean_code-nodejs](TODO) template. -->

<!-- And if you need to head-start a project check out [ozanmuyes/template-tdd_clean_code](TODO) template. -->
<!-- MAYBE And if you want to head-start with an established codebase you can try these;
* [ozanmuyes/template-tsj-cc-koa-hbs-sql](TODO)
* [ozanmuyes/template-tsj-cc-khs-crud1](TODO) -->

Finally don't forget to change this README.

Thanks. Please don't forget to Star this repository if you find it useful.

## Remarks

1. This template requires Node.js v20 and above.
1. Delete build directory (i.e. "dist") before debugging or running tests.

## Known Issues

* Currently cannot run "lint" script due to;
  > WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.
  >
  > SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <5.2.0
  >
  > YOUR TYPESCRIPT VERSION: 5.3.3
