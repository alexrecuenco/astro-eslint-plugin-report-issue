import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  // First issue, eslintPluginAstro MUST be defined after, since it overrides the typescript parser
  ...eslintPluginAstro.configs['flat/all'],
  {
    rules: {
      // If this is turned on, it fails.
      '@typescript-eslint/await-thenable': "off",
      // '@typescript-eslint/await-thenable': "error",
      // Error: Error while loading rule '@typescript-eslint/await-thenable': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
];
