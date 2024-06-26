Running `npx eslint . --debug`

```js
[
  // ...
  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        DEPRECATED__createDefaultProgram: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
];
```


```bash
2024-06-26T15:50:41.878Z eslint:cli CLI args: [ '.', '--debug' ]
2024-06-26T15:50:41.881Z eslint:cli Using flat config? true
2024-06-26T15:50:41.884Z eslint:cli Running on files
2024-06-26T15:50:41.886Z eslint:flat-eslint Searching for eslint.config.js
2024-06-26T15:50:41.887Z eslint:flat-eslint Loading config from /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:50:41.887Z eslint:flat-eslint Config file URL is file:///Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:50:42.397Z eslint:rules Loading rule 'block-spacing' (remaining=290)
2024-06-26T15:50:42.403Z eslint:rules Loading rule 'brace-style' (remaining=289)
2024-06-26T15:50:42.405Z eslint:rules Loading rule 'comma-dangle' (remaining=288)
2024-06-26T15:50:42.409Z eslint:rules Loading rule 'consistent-return' (remaining=287)
2024-06-26T15:50:42.415Z eslint:rules Loading rule 'dot-notation' (remaining=286)
2024-06-26T15:50:42.420Z eslint:rules Loading rule 'indent' (remaining=285)
2024-06-26T15:50:42.422Z eslint:rules Loading rule 'init-declarations' (remaining=284)
2024-06-26T15:50:42.423Z eslint:rules Loading rule 'key-spacing' (remaining=283)
2024-06-26T15:50:42.424Z eslint:rules Loading rule 'keyword-spacing' (remaining=282)
2024-06-26T15:50:42.426Z eslint:rules Loading rule 'lines-around-comment' (remaining=281)
2024-06-26T15:50:42.427Z eslint:rules Loading rule 'lines-between-class-members' (remaining=280)
2024-06-26T15:50:42.428Z eslint:rules Loading rule 'max-params' (remaining=279)
2024-06-26T15:50:42.441Z eslint:rules Loading rule 'no-dupe-class-members' (remaining=278)
2024-06-26T15:50:42.443Z eslint:rules Loading rule 'no-empty-function' (remaining=277)
2024-06-26T15:50:42.445Z eslint:rules Loading rule 'no-extra-parens' (remaining=276)
2024-06-26T15:50:42.446Z eslint:rules Loading rule 'no-extra-semi' (remaining=275)
2024-06-26T15:50:42.457Z eslint:rules Loading rule 'no-invalid-this' (remaining=274)
2024-06-26T15:50:42.458Z eslint:rules Loading rule 'no-loop-func' (remaining=273)
2024-06-26T15:50:42.458Z eslint:rules Loading rule 'no-loss-of-precision' (remaining=272)
2024-06-26T15:50:42.459Z eslint:rules Loading rule 'no-magic-numbers' (remaining=271)
2024-06-26T15:50:42.471Z eslint:rules Loading rule 'no-restricted-imports' (remaining=270)
2024-06-26T15:50:42.499Z eslint:rules Loading rule 'no-unused-expressions' (remaining=269)
2024-06-26T15:50:42.501Z eslint:rules Loading rule 'no-useless-constructor' (remaining=268)
2024-06-26T15:50:42.505Z eslint:rules Loading rule 'object-curly-spacing' (remaining=267)
2024-06-26T15:50:42.509Z eslint:rules Loading rule 'prefer-destructuring' (remaining=266)
2024-06-26T15:50:42.537Z eslint:rules Loading rule 'quotes' (remaining=265)
2024-06-26T15:50:42.543Z eslint:rules Loading rule 'semi' (remaining=264)
2024-06-26T15:50:42.544Z eslint:rules Loading rule 'space-before-blocks' (remaining=263)
2024-06-26T15:50:42.545Z eslint:rules Loading rule 'space-infix-ops' (remaining=262)
2024-06-26T15:50:42.562Z eslint:flat-eslint Deleting cache file at /Volumes/Workspace/external/astro-eslint-plugin-report-issue/.eslintcache
2024-06-26T15:50:42.585Z eslint:rules Loading rule 'no-var' (remaining=261)
2024-06-26T15:50:42.585Z eslint:rules Loading rule 'prefer-const' (remaining=260)
2024-06-26T15:50:42.587Z eslint:rules Loading rule 'prefer-rest-params' (remaining=259)
2024-06-26T15:50:42.587Z eslint:rules Loading rule 'prefer-spread' (remaining=258)
2024-06-26T15:50:42.590Z eslint:flat-eslint 4 files found in: 28ms
2024-06-26T15:50:42.591Z eslint:flat-eslint Lint /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs
2024-06-26T15:50:42.591Z eslint:linter Linting code for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs (pass 1)
2024-06-26T15:50:42.591Z eslint:linter Verify
2024-06-26T15:50:42.591Z eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs
2024-06-26T15:50:42.592Z eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs
2024-06-26T15:50:43.739Z eslint:linter Parsing successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs
2024-06-26T15:50:43.739Z eslint:linter Scope analysis: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs
2024-06-26T15:50:43.739Z eslint:linter Scope analysis successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs
2024-06-26T15:50:43.752Z eslint:linter Generating fixed text for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs (pass 1)
2024-06-26T15:50:43.752Z eslint:source-code-fixer Applying fixes
2024-06-26T15:50:43.752Z eslint:source-code-fixer shouldFix parameter was false, not attempting fixes
2024-06-26T15:50:43.754Z eslint:flat-eslint Lint /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:50:43.754Z eslint:linter Linting code for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs (pass 1)
2024-06-26T15:50:43.754Z eslint:linter Verify
2024-06-26T15:50:43.754Z eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:50:43.754Z eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:50:43.758Z eslint:linter Parsing successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:50:43.758Z eslint:linter Scope analysis: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:50:43.758Z eslint:linter Scope analysis successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:50:43.761Z eslint:linter Generating fixed text for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs (pass 1)
2024-06-26T15:50:43.761Z eslint:source-code-fixer Applying fixes
2024-06-26T15:50:43.761Z eslint:source-code-fixer shouldFix parameter was false, not attempting fixes
2024-06-26T15:50:43.761Z eslint:flat-eslint Lint /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts
2024-06-26T15:50:43.761Z eslint:linter Linting code for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts (pass 1)
2024-06-26T15:50:43.761Z eslint:linter Verify
2024-06-26T15:50:43.761Z eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts
2024-06-26T15:50:43.761Z eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts
2024-06-26T15:50:43.763Z eslint:linter Parsing successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts
2024-06-26T15:50:43.763Z eslint:linter Scope analysis: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts
2024-06-26T15:50:43.763Z eslint:linter Scope analysis successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts
2024-06-26T15:50:43.764Z eslint:linter Generating fixed text for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts (pass 1)
2024-06-26T15:50:43.764Z eslint:source-code-fixer Applying fixes
2024-06-26T15:50:43.764Z eslint:source-code-fixer shouldFix parameter was false, not attempting fixes
2024-06-26T15:50:43.764Z eslint:flat-eslint Lint /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro
2024-06-26T15:50:43.764Z eslint:linter Linting code for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro (pass 1)
2024-06-26T15:50:43.764Z eslint:linter Verify
2024-06-26T15:50:43.764Z eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro
2024-06-26T15:50:43.764Z eslint:linter Apply the processor: { preprocess: [Function: preprocess], postprocess: [Function: postprocess], supportsAutofix: true, meta: { name: 'astro/client-side-ts', version: '1.2.2' } }
2024-06-26T15:50:43.884Z eslint:linter A code block was found: '(unnamed)'
2024-06-26T15:50:43.884Z eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro
2024-06-26T15:50:44.850Z eslint:linter Parsing successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro
2024-06-26T15:50:44.850Z eslint:linter Scope analysis: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro
2024-06-26T15:50:44.850Z eslint:linter Scope analysis successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro
2024-06-26T15:50:44.855Z eslint:linter A code block was found: '1.ts'
2024-06-26T15:50:44.855Z eslint:linter Resolving configuration again because the file content or extension was changed.
2024-06-26T15:50:44.855Z eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro/1_1.ts
2024-06-26T15:50:44.866Z eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro/1_1.ts
2024-06-26T15:50:45.170Z eslint:linter Parsing successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro/1_1.ts
2024-06-26T15:50:45.170Z eslint:linter Scope analysis: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro/1_1.ts
2024-06-26T15:50:45.170Z eslint:linter Scope analysis successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro/1_1.ts
2024-06-26T15:50:45.174Z eslint:linter Generating fixed text for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro (pass 1)
2024-06-26T15:50:45.174Z eslint:source-code-fixer Applying fixes
2024-06-26T15:50:45.174Z eslint:source-code-fixer shouldFix parameter was false, not attempting fixes

/Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro
   5:7   error  'c' is assigned a value but never used    @typescript-eslint/no-unused-vars
   5:10  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
   6:7   error  'b' is assigned a value but never used    @typescript-eslint/no-unused-vars
  10:9   error  'c' is assigned a value but never used    @typescript-eslint/no-unused-vars
  11:12  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

✖ 5 problems (5 errors, 0 warnings)


```
