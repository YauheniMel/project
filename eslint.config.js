import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import { includeIgnoreFile } from '@eslint/compat';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import babelParser from '@babel/eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: babelParser,
    },
    settings: { react: { version: '18.3.1' } },
  },
  includeIgnoreFile(gitignorePath),
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
];
