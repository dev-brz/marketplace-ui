import { defineConfig } from "eslint/config";
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  {
    files: ["**/*.ts"],
    ignores: ["src/api/**"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
      stylistic.configs.recommended
    ],
    plugins: { 
       '@stylistic': stylistic
    },
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "mkt",
          style: "kebab-case"
        },
      ],
      "@stylistic/semi": ['error', 'always'],
      "@stylistic/brace-style": ['warn', '1tbs']
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    rules: {},
  },
]);
