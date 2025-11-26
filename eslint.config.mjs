import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jobrouterGlobals from './.jobrouter/jobrouter.js';
import emsiGlobals from './.emsi/emsi.js';

export default [
   {
      ...eslintConfigPrettier,
   },
   pluginJs.configs.recommended,
   {
      files: ['**/*.js'],
      linterOptions: {
         reportUnusedDisableDirectives: true,
      },
      languageOptions: {
         ecmaVersion: 2022,
         globals: {
            ...globals.browser,
            ...globals.jquery,
            ...jobrouterGlobals.configs.recommended.globals,
            ...emsiGlobals.configs.recommended.globals,
         },
      },
      rules: {
         'no-unused-vars': 'warn',
         'no-var': 'error',
         'no-console': 'warn',
         'prefer-const': 'warn',
         'capitalized-comments': ['error', 'always'],
         camelcase: ['error', { ignoreGlobals: true }],
      },
   },
];
