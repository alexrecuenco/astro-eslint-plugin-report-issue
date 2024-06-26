# [parsing error]  Typescript Parsing error silently on `<script>` tags. Requires `--debug`. (`ESLint was configured to run on... .astro/1_2.ts`, TSConfig does not include this file )

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
<summary>package.json</summary>

```json
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
</details>

<details>
<summary>eslint.config.mjs</summary>

```js
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


<details>
<summary>src/index.astro</summary>

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
</details>


### What did you expect to happen?

The code in <script> tags is linted

### What actually happened?

The code in between `---` is linted, but not the one inside `script` tags

### Link to Minimal Reproducible Example

Minimal reproducible example can be found at the tag `minimal-error` on this repo (See this last commit for extra details on the exact steps taken): https://github.com/alexrecuenco/astro-eslint-plugin-report-issue/tree/minimal-error



On top of that, I did some further exploration and I describe my brief findings on the commit message(s) at this tag https://github.com/alexrecuenco/astro-eslint-plugin-report-issue/tree/type-discrepancy

__

### Additional comments

First of all, I reported an issue that seems to have disappeared with a related problem. I had thought it was fixed, but it turns out it isn't.

In that thread, —which I can't reference anymore since it must've gotten cleaned/cleared— by following the recommendations of this plugin's authors I added

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

That seems to have done the trick, I stopped getting typescript-eslint crashing when running. Unbeknownst to us, it turns out, the issue was still hiding away. By running with `--debug` you can see that all the *"virtual typescript files"* (`*.astro/1_1.ts`) are not parsed. These represent the `script` tags, and because the error happens in a file that isn't real, eslint doesn't report you the issue, it simply crashes silently while processing those files.

Here is the result running with `--debug`:


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

I have tried to solve this by:

1. Adding the exact file to `includes`
2. Upgrading typescript from 5.4 to 5.5
3. By upgrading to version 8 of typescript eslint and eslint 9. I thought that since the new `projectService` is meant to process files that are "outside the project" it should be able to help, but that didn't work due to some other incompatibility between versions, I believe eslint-plugin-astro still doesn't regard eslint 9 as a valid peer dependency.
4. For that reason, I switched back to version 7 an d8 respectively and tried using `EXPERIMENTAL_useProjectService`. Funnily enough, that makes the top section of an astro file fail with a parsing error, even though `script` tags now report linting appropriately .
5. Finally, I ran eslint with a debugger line by line, and found the following is where it is diverging paths


<details>
<summary><rootDir>/node_modules/@typescript-eslint/typescript-estree/dist/create-program/createProjectProgram.js</summary>



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
</details>


Well, looking at that section, by using `DEPRECATED__createDefaultProgram: true` in the settings it "works". It can parse both script tags and the top section of an .astro file.

But of course, once you do that, the recommended trick to create a `jsx.d.ts` stops working, it regards everything as "any" (that is what the tag [`type-discrepancy`] explores)


For context, the full debug output of eslint that I have described can be found in the [repo linked](https://github.com/alexrecuenco/astro-eslint-plugin-report-issue) on the files `/results-*.md`


I hope this report is helpful to find how to fix this
