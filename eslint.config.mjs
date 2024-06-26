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
        project: ["./tsconfig.json"],
        // When typescript/eslint v8 comes out this will become projectService
        // https://github.com/typescript-eslint/typescript-eslint/issues/9141
        // EXPERIMENTAL_useProjectService: true,
        DEPRECATED__createDefaultProgram: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
];
