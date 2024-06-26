
Error when running with `npx eslint . --debug`

With the settings

```js
const result = {
    // ...,
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
}
```

```bash

❯ npx eslint . --debug
  eslint:cli CLI args: [ '.', '--debug' ] +0ms
  eslint:cli Using flat config? true +3ms
  eslint:cli Running on files +3ms
  eslint:flat-eslint Searching for eslint.config.js +0ms
  eslint:flat-eslint Loading config from /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs +1ms
  eslint:flat-eslint Config file URL is file:///Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs +0ms
  eslint:rules Loading rule 'block-spacing' (remaining=290) +0ms
  eslint:rules Loading rule 'brace-style' (remaining=289) +5ms
  eslint:rules Loading rule 'comma-dangle' (remaining=288) +2ms
  eslint:rules Loading rule 'consistent-return' (remaining=287) +3ms
  eslint:rules Loading rule 'dot-notation' (remaining=286) +8ms
  eslint:rules Loading rule 'indent' (remaining=285) +4ms
  eslint:rules Loading rule 'init-declarations' (remaining=284) +2ms
  eslint:rules Loading rule 'key-spacing' (remaining=283) +1ms
  eslint:rules Loading rule 'keyword-spacing' (remaining=282) +1ms
  eslint:rules Loading rule 'lines-around-comment' (remaining=281) +1ms
  eslint:rules Loading rule 'lines-between-class-members' (remaining=280) +2ms
  eslint:rules Loading rule 'max-params' (remaining=279) +0ms
  eslint:rules Loading rule 'no-dupe-class-members' (remaining=278) +16ms
  eslint:rules Loading rule 'no-empty-function' (remaining=277) +2ms
  eslint:rules Loading rule 'no-extra-parens' (remaining=276) +2ms
  eslint:rules Loading rule 'no-extra-semi' (remaining=275) +1ms
  eslint:rules Loading rule 'no-invalid-this' (remaining=274) +16ms
  eslint:rules Loading rule 'no-loop-func' (remaining=273) +2ms
  eslint:rules Loading rule 'no-loss-of-precision' (remaining=272) +0ms
  eslint:rules Loading rule 'no-magic-numbers' (remaining=271) +1ms
  eslint:rules Loading rule 'no-restricted-imports' (remaining=270) +14ms
  eslint:rules Loading rule 'no-unused-expressions' (remaining=269) +38ms
  eslint:rules Loading rule 'no-useless-constructor' (remaining=268) +2ms
  eslint:rules Loading rule 'object-curly-spacing' (remaining=267) +5ms
  eslint:rules Loading rule 'prefer-destructuring' (remaining=266) +5ms
  eslint:rules Loading rule 'quotes' (remaining=265) +32ms
  eslint:rules Loading rule 'semi' (remaining=264) +7ms
  eslint:rules Loading rule 'space-before-blocks' (remaining=263) +2ms
  eslint:rules Loading rule 'space-infix-ops' (remaining=262) +1ms
  eslint:flat-eslint Deleting cache file at /Volumes/Workspace/external/astro-eslint-plugin-report-issue/.eslintcache +666ms
  eslint:rules Loading rule 'no-var' (remaining=261) +46ms
  eslint:rules Loading rule 'prefer-const' (remaining=260) +1ms
  eslint:rules Loading rule 'prefer-rest-params' (remaining=259) +2ms
  eslint:rules Loading rule 'prefer-spread' (remaining=258) +1ms
  eslint:flat-eslint 4 files found in: 33ms +33ms
  eslint:flat-eslint Lint /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs +1ms
  eslint:linter Linting code for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs (pass 1) +0ms
  eslint:linter Verify +0ms
  eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs +0ms
  eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs +1ms
  eslint:linter Parsing successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs +1s
  eslint:linter Scope analysis: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs +0ms
  eslint:linter Scope analysis successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs +0ms
  eslint:linter Generating fixed text for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs (pass 1) +15ms
  eslint:source-code-fixer Applying fixes +0ms
  eslint:source-code-fixer shouldFix parameter was false, not attempting fixes +0ms
  eslint:flat-eslint Lint /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs +1s
  eslint:linter Linting code for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs (pass 1) +2ms
  eslint:linter Verify +0ms
  eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs +0ms
  eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs +0ms
  eslint:linter Parsing successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs +3ms
  eslint:linter Scope analysis: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs +0ms
  eslint:linter Scope analysis successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs +0ms
  eslint:linter Generating fixed text for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs (pass 1) +2ms
  eslint:source-code-fixer Applying fixes +7ms
  eslint:source-code-fixer shouldFix parameter was false, not attempting fixes +0ms
  eslint:flat-eslint Lint /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts +5ms
  eslint:linter Linting code for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts (pass 1) +0ms
  eslint:linter Verify +0ms
  eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts +0ms
  eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts +0ms
  eslint:linter Parsing successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts +1ms
  eslint:linter Scope analysis: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts +0ms
  eslint:linter Scope analysis successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts +0ms
  eslint:linter Generating fixed text for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts (pass 1) +2ms
  eslint:source-code-fixer Applying fixes +3ms
  eslint:source-code-fixer shouldFix parameter was false, not attempting fixes +0ms
  eslint:flat-eslint Lint /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro +3ms
  eslint:linter Linting code for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro (pass 1) +0ms
  eslint:linter Verify +0ms
  eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro +0ms
  eslint:linter Apply the processor: { preprocess: [Function: preprocess], postprocess: [Function: postprocess], supportsAutofix: true, meta: { name: 'astro/client-side-ts', version: '1.2.2' } } +0ms
  eslint:linter A code block was found: '(unnamed)' +119ms
  eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro +0ms
  eslint:linter Parsing successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro +880ms
  eslint:linter Scope analysis: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro +0ms
  eslint:linter Scope analysis successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro +0ms
  eslint:linter A code block was found: '1.ts' +5ms
  eslint:linter Resolving configuration again because the file content or extension was changed. +1ms
  eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro/1_1.ts +0ms
  eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro/1_1.ts +11ms
  eslint:linter Parsing error: ESLint was configured to run on `<tsconfigRootDir>/src/pages/index.astro/1_1.ts` using `parserOptions.project`: <tsconfigRootDir>/tsconfig.json
However, that TSConfig does not include this file. Either:
- Change ESLint's list of included files to not include this file
- Change that TSConfig to include this file
- Create a new TSConfig that includes this file and include it in your parserOptions.project
See the typescript-eslint docs for more info: https://typescript-eslint.io/troubleshooting/typed-linting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
  eslint:linter Error: ESLint was configured to run on `<tsconfigRootDir>/src/pages/index.astro/1_1.ts` using `parserOptions.project`: <tsconfigRootDir>/tsconfig.json
However, that TSConfig does not include this file. Either:
- Change ESLint's list of included files to not include this file
- Change that TSConfig to include this file
- Create a new TSConfig that includes this file and include it in your parserOptions.project
See the typescript-eslint docs for more info: https://typescript-eslint.io/troubleshooting/typed-linting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
    at createProjectProgram (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/@typescript-eslint/typescript-estree/dist/create-program/createProjectProgram.js:98:11)
    at getProgramAndAST (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/@typescript-eslint/typescript-estree/dist/parser.js:61:80)
    at parseAndGenerateServices (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/@typescript-eslint/typescript-estree/dist/parser.js:167:11)
    at Object.parseForESLint (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/@typescript-eslint/parser/dist/parser.js:98:80)
    at parse (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/eslint/lib/linter/linter.js:834:22)
    at Linter._verifyWithFlatConfigArrayAndWithoutProcessors (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/eslint/lib/linter/linter.js:1593:33)
    at Linter._verifyWithFlatConfigArray (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/eslint/lib/linter/linter.js:1861:21)
    at /Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/eslint/lib/linter/linter.js:1520:29
    at Array.map (<anonymous>)
    at Linter._verifyWithFlatConfigArrayAndProcessor (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/eslint/lib/linter/linter.js:1500:37) +52ms
  eslint:linter Generating fixed text for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro (pass 1) +1ms
  eslint:source-code-fixer Applying fixes +1s
  eslint:source-code-fixer shouldFix parameter was false, not attempting fixes +0ms

/Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro
  5:7   error  'c' is assigned a value but never used    @typescript-eslint/no-unused-vars
  5:10  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  6:7   error  'b' is assigned a value but never used    @typescript-eslint/no-unused-vars

✖ 3 problems (3 errors, 0 warnings)

```
