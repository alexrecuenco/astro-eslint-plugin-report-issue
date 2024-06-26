Running `npx eslint . --debug`

```js
[
  // ...
  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        EXPERIMENTAL_useProjectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
];
```


```bash
2024-06-26T15:47:23.320Z eslint:cli CLI args: [ '.', '--debug' ]
2024-06-26T15:47:23.323Z eslint:cli Using flat config? true
2024-06-26T15:47:23.326Z eslint:cli Running on files
2024-06-26T15:47:23.327Z eslint:flat-eslint Searching for eslint.config.js
2024-06-26T15:47:23.328Z eslint:flat-eslint Loading config from /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:47:23.328Z eslint:flat-eslint Config file URL is file:///Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:47:23.816Z eslint:rules Loading rule 'block-spacing' (remaining=290)
2024-06-26T15:47:23.821Z eslint:rules Loading rule 'brace-style' (remaining=289)
2024-06-26T15:47:23.823Z eslint:rules Loading rule 'comma-dangle' (remaining=288)
2024-06-26T15:47:23.826Z eslint:rules Loading rule 'consistent-return' (remaining=287)
2024-06-26T15:47:23.832Z eslint:rules Loading rule 'dot-notation' (remaining=286)
2024-06-26T15:47:23.836Z eslint:rules Loading rule 'indent' (remaining=285)
2024-06-26T15:47:23.838Z eslint:rules Loading rule 'init-declarations' (remaining=284)
2024-06-26T15:47:23.839Z eslint:rules Loading rule 'key-spacing' (remaining=283)
2024-06-26T15:47:23.840Z eslint:rules Loading rule 'keyword-spacing' (remaining=282)
2024-06-26T15:47:23.841Z eslint:rules Loading rule 'lines-around-comment' (remaining=281)
2024-06-26T15:47:23.843Z eslint:rules Loading rule 'lines-between-class-members' (remaining=280)
2024-06-26T15:47:23.843Z eslint:rules Loading rule 'max-params' (remaining=279)
2024-06-26T15:47:23.857Z eslint:rules Loading rule 'no-dupe-class-members' (remaining=278)
2024-06-26T15:47:23.859Z eslint:rules Loading rule 'no-empty-function' (remaining=277)
2024-06-26T15:47:23.861Z eslint:rules Loading rule 'no-extra-parens' (remaining=276)
2024-06-26T15:47:23.862Z eslint:rules Loading rule 'no-extra-semi' (remaining=275)
2024-06-26T15:47:23.873Z eslint:rules Loading rule 'no-invalid-this' (remaining=274)
2024-06-26T15:47:23.874Z eslint:rules Loading rule 'no-loop-func' (remaining=273)
2024-06-26T15:47:23.874Z eslint:rules Loading rule 'no-loss-of-precision' (remaining=272)
2024-06-26T15:47:23.875Z eslint:rules Loading rule 'no-magic-numbers' (remaining=271)
2024-06-26T15:47:23.887Z eslint:rules Loading rule 'no-restricted-imports' (remaining=270)
2024-06-26T15:47:23.917Z eslint:rules Loading rule 'no-unused-expressions' (remaining=269)
2024-06-26T15:47:23.919Z eslint:rules Loading rule 'no-useless-constructor' (remaining=268)
2024-06-26T15:47:23.925Z eslint:rules Loading rule 'object-curly-spacing' (remaining=267)
2024-06-26T15:47:23.929Z eslint:rules Loading rule 'prefer-destructuring' (remaining=266)
2024-06-26T15:47:23.960Z eslint:rules Loading rule 'quotes' (remaining=265)
2024-06-26T15:47:23.966Z eslint:rules Loading rule 'semi' (remaining=264)
2024-06-26T15:47:23.967Z eslint:rules Loading rule 'space-before-blocks' (remaining=263)
2024-06-26T15:47:23.968Z eslint:rules Loading rule 'space-infix-ops' (remaining=262)
2024-06-26T15:47:23.985Z eslint:flat-eslint Deleting cache file at /Volumes/Workspace/external/astro-eslint-plugin-report-issue/.eslintcache
2024-06-26T15:47:24.007Z eslint:rules Loading rule 'no-var' (remaining=261)
2024-06-26T15:47:24.008Z eslint:rules Loading rule 'prefer-const' (remaining=260)
2024-06-26T15:47:24.009Z eslint:rules Loading rule 'prefer-rest-params' (remaining=259)
2024-06-26T15:47:24.010Z eslint:rules Loading rule 'prefer-spread' (remaining=258)
2024-06-26T15:47:24.013Z eslint:flat-eslint 4 files found in: 28ms
2024-06-26T15:47:24.013Z eslint:flat-eslint Lint /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs
2024-06-26T15:47:24.013Z eslint:linter Linting code for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs (pass 1)
2024-06-26T15:47:24.014Z eslint:linter Verify
2024-06-26T15:47:24.014Z eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs
2024-06-26T15:47:24.014Z eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs
2024-06-26T15:47:25.138Z eslint:linter Parsing successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs
2024-06-26T15:47:25.138Z eslint:linter Scope analysis: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs
2024-06-26T15:47:25.138Z eslint:linter Scope analysis successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs
2024-06-26T15:47:25.151Z eslint:linter Generating fixed text for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/astro.config.mjs (pass 1)
2024-06-26T15:47:25.151Z eslint:source-code-fixer Applying fixes
2024-06-26T15:47:25.151Z eslint:source-code-fixer shouldFix parameter was false, not attempting fixes
2024-06-26T15:47:25.151Z eslint:flat-eslint Lint /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:47:25.151Z eslint:linter Linting code for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs (pass 1)
2024-06-26T15:47:25.151Z eslint:linter Verify
2024-06-26T15:47:25.151Z eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:47:25.151Z eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:47:25.155Z eslint:linter Parsing successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:47:25.155Z eslint:linter Scope analysis: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:47:25.155Z eslint:linter Scope analysis successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs
2024-06-26T15:47:25.157Z eslint:linter Generating fixed text for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/eslint.config.mjs (pass 1)
2024-06-26T15:47:25.157Z eslint:source-code-fixer Applying fixes
2024-06-26T15:47:25.157Z eslint:source-code-fixer shouldFix parameter was false, not attempting fixes
2024-06-26T15:47:25.158Z eslint:flat-eslint Lint /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts
2024-06-26T15:47:25.158Z eslint:linter Linting code for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts (pass 1)
2024-06-26T15:47:25.158Z eslint:linter Verify
2024-06-26T15:47:25.158Z eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts
2024-06-26T15:47:25.158Z eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts
2024-06-26T15:47:25.161Z eslint:linter Parsing successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts
2024-06-26T15:47:25.161Z eslint:linter Scope analysis: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts
2024-06-26T15:47:25.161Z eslint:linter Scope analysis successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts
2024-06-26T15:47:25.163Z eslint:linter Generating fixed text for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/env.d.ts (pass 1)
2024-06-26T15:47:25.163Z eslint:source-code-fixer Applying fixes
2024-06-26T15:47:25.163Z eslint:source-code-fixer shouldFix parameter was false, not attempting fixes
2024-06-26T15:47:25.164Z eslint:flat-eslint Lint /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro
2024-06-26T15:47:25.164Z eslint:linter Linting code for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro (pass 1)
2024-06-26T15:47:25.164Z eslint:linter Verify
2024-06-26T15:47:25.164Z eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro
2024-06-26T15:47:25.164Z eslint:linter Apply the processor: { preprocess: [Function: preprocess], postprocess: [Function: postprocess], supportsAutofix: true, meta: { name: 'astro/client-side-ts', version: '1.2.2' } }
2024-06-26T15:47:25.295Z eslint:linter A code block was found: '(unnamed)'
2024-06-26T15:47:25.295Z eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro
2024-06-26T15:47:26.421Z eslint:linter Parsing error: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProjectForFiles.
Error: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProjectForFiles.
    at useProgramFromProjectService (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/@typescript-eslint/typescript-estree/dist/useProgramFromProjectService.js:31:19)
    at getProgramAndAST (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/@typescript-eslint/typescript-estree/dist/parser.js:45:100)
    at parseAndGenerateServices (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/@typescript-eslint/typescript-estree/dist/parser.js:167:11)
    at Object.parseForESLint (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/@typescript-eslint/parser/dist/parser.js:98:80)
    at parseTsxForTypeScript (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/astro-eslint-parser/lib/index.js:357:25)
    at Object.parse (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/astro-eslint-parser/lib/index.js:438:14)
    at parseScriptInternal (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/astro-eslint-parser/lib/index.js:895:86)
    at parseScript (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/astro-eslint-parser/lib/index.js:857:18)
    at parseForESLint (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/astro-eslint-parser/lib/index.js:2734:24)
    at Module.parseForESLint2 (/Volumes/Workspace/external/astro-eslint-plugin-report-issue/node_modules/astro-eslint-parser/lib/index.js:2825:10)
2024-06-26T15:47:26.421Z eslint:linter A code block was found: '1.ts'
2024-06-26T15:47:26.424Z eslint:linter Resolving configuration again because the file content or extension was changed.
2024-06-26T15:47:26.424Z eslint:linter With flat config: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro/1_1.ts
2024-06-26T15:47:26.433Z eslint:linter Parsing: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro/1_1.ts
2024-06-26T15:47:26.515Z eslint:linter Parsing successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro/1_1.ts
2024-06-26T15:47:26.515Z eslint:linter Scope analysis: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro/1_1.ts
2024-06-26T15:47:26.515Z eslint:linter Scope analysis successful: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro/1_1.ts
2024-06-26T15:47:26.519Z eslint:linter Generating fixed text for /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro (pass 1)
2024-06-26T15:47:26.519Z eslint:source-code-fixer Applying fixes
2024-06-26T15:47:26.519Z eslint:source-code-fixer shouldFix parameter was false, not attempting fixes

/Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro
   0:0   error  Parsing error: /Volumes/Workspace/external/astro-eslint-plugin-report-issue/src/pages/index.astro was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProjectForFiles
  10:9   error  'c' is assigned a value but never used                                                                                                                                                                                                    @typescript-eslint/no-unused-vars
  11:12  error  Unexpected any. Specify a different type                                                                                                                                                                                                  @typescript-eslint/no-explicit-any

✖ 3 problems (3 errors, 0 warnings)

```
