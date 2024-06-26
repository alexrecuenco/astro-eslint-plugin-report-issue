### Before You File a Bug Report Please Confirm You Have Done The Following...

- [X] I have tried restarting my IDE and the issue persists.
- [X] I have updated to the latest version of the packages.

### What version of ESLint are you using?

^8.57.0

### What version of `eslint-plugin-astro` are you using?

^1.2.2

### What did you do?

Please find the minimal reproducible case in the repository linked below
<details>
<summary>Configuration</summary>
```
{
  "name": "astro-eslint-plugin-issue-report",
  "type": "module",
  "version": "0.0.2",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro",
    "lint": "eslint ."
  },
  "dependencies": {
    "@astrojs/check": "^0.7.0",
    "astro": "^4.11.3",
    "typescript": "^5.5.2"
  },
  "devDependencies": {
    "@typescript-eslint/parser": "^7.14.1",
    "eslint": "^8.57.0",
    "eslint-plugin-astro": "^1.2.2",
    "typescript-eslint": "^7.14.1"
  }
}
```

```
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from "typescript-eslint";
/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray} */
export default [
  {ignores: ["*.config.*"]},
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  // First issue, eslintPluginAstro MUST be defined after, since it overrides the typescript parser
  ...eslintPluginAstro.configs["flat/all"],
  {
    rules: {
      '@typescript-eslint/await-thenable': "error",
      // Error: Error while loading rule '@typescript-eslint/await-thenable': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.eslint.json"],
        // When typescript/eslint v8 comes out this will become projectService
        // https://github.com/typescript-eslint/typescript-eslint/issues/9141
        // EXPERIMENTAL_useProjectService: true,
        // DEPRECATED__createDefaultProgram: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
];
```
</details>

```astro
---
const a = 1;
console.log("b");

const c: any = 1;
const b = 0;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro</title>
  </head>
  <body id="myroot">
    <div class="container">
      <h1>Astro {a}</h1>
    </div>
  </body>

  <script>
    const c = null!;
    const d: any = 1;

    const element = document.getElementById("my-root")!;
    element.offsetLeft += 4;
    console.log(d);
    console.log("c");
    const container = document.querySelector(".container")!;
    container.scrollLeft += 2;
  </script>
</html>
```


### What did you expect to happen?

The code in <script> tags is linted

### What actually happened?

The code in between `---` is linted, but not the one inside `script` tags

### Link to Minimal Reproducible Example

Minimal error can be found here, I made a tag: https://github.com/alexrecuenco/astro-eslint-plugin-report-issue/tree/minimal-error



I did some further exploration and, I describe my brief findings on the commit message at  this tag https://github.com/alexrecuenco/astro-eslint-plugin-report-issue/tree/type-discrepancy

__

### Additional comments

First of all, I made a similar issue that seems to have dissapeared with a somewhat similar issue, I thought it was fixed, but it turns out it isn't. Nonetheless, the issue was either deleted or cleaned up so I can't reference it anymore

By following the recommendations of this plugin's authors I added

```js
  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }

```

And it seemd to have worked, I stopped getting errors when running. However, turns out, the issue was still hiding away, by running with `--debug` you can see that all the *"virtual files"* that reference the <script> tags are not parsed, so you never get feedback on them, it crashes silently while processing those files (And since those files are virtual, you also don't get reports at the top


```bash
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

```

I have tried to solve it by upgrading to version 8 of typescript eslint and eslint 9, since `projectService` is meant to process files that are "outside the project", but that didn't work due to some other incompatibility between different projects

For that reason, I switched to using `EXPERIMENTAL_useProjectService`, but when that is used now the .astro file, the section in-between the `---` files doesn't run anymore, that one is now the one getting the parse error

Finally, I ran eslint with a debugger line by line, and found


<rootDir>/node_modules/@typescript-eslint/typescript-estree/dist/create-program/createProjectProgram.js

```js
function createProjectProgram(parseSettings, programsForProjects) {
    log('Creating project program for: %s', parseSettings.filePath);
    const astAndProgram = (0, node_utils_1.firstDefined)(programsForProjects, currentProgram => (0, shared_1.getAstFromProgram)(currentProgram, parseSettings.filePath));
    // The file was either matched within the tsconfig, or we allow creating a default program
    // eslint-disable-next-line deprecation/deprecation -- will be cleaned up with the next major
    if (astAndProgram || parseSettings.DEPRECATED__createDefaultProgram) {
        return astAndProgram;
    }
    ...
}

```


Well, running with `DEPRECATED__createDefaultProgram: true` it "works".

But of course, once you do that, the recommended trick to create a `jsx.d.ts` stops working, it regards everything as "any" (that is what the tag `type-discrepancy` explores)


All the 3 setting permutations and the `--debug` output can be found in the repo at `/results-*.md`


I hope this report is helpful to find how to fix this
