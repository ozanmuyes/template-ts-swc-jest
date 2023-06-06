// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#getting-started---linting-your-typescript-codebase

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-prettier",
    "jest",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "no-param-reassign": "error",
  },
  // overrides: [
  //   {
  //     files: ["test/**/*.ts", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
  //     rules: {
  //       // "no-param-reassign": "off",
  //     },
  //   },
  //   //
  // ],
};
