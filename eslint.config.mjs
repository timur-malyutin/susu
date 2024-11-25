import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import tailwindcssPlugin from 'eslint-plugin-tailwindcss'
import eslintPluginCheckFile from 'eslint-plugin-check-file'
import eslintPluginPromise from 'eslint-plugin-promise'
import eslintPluginSonarjs from 'eslint-plugin-sonarjs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import babelEslintParser from '@babel/eslint-parser'
import templateStringQuotesRule from './eslint-custom-rules/template-string-quotes.js'
import removeCommentsRule from './eslint-custom-rules/remove-comments.js'
import globals from 'globals'
import { resolve } from 'path'

export default [
  {
    files: ['**/*.ts', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      import: eslintPluginImport,
      'jsx-a11y': eslintPluginJsxA11y,
      tailwindcss: tailwindcssPlugin,
      'check-file': eslintPluginCheckFile,
      promise: eslintPluginPromise,
      sonarjs: eslintPluginSonarjs,
      unicorn: eslintPluginUnicorn,
      'react-refresh': eslintPluginReactRefresh,
      'custom-rules': {
        rules: {
          'template-string-quotes': templateStringQuotesRule,
          'remove-comments': removeCommentsRule,
        },
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-function-return-type': ['off'],
      '@typescript-eslint/explicit-module-boundary-types': ['off'],
      '@typescript-eslint/no-empty-function': ['off'],
      '@typescript-eslint/no-explicit-any': ['off'],
      'custom-rules/template-string-quotes': 'error',
      'import/no-cycle': 'error',
      'linebreak-style': ['off'],
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'promise/always-return': 'error',
      'promise/catch-or-return': 'error',
      'promise/no-return-wrap': 'error',
      'sonarjs/cognitive-complexity': ['error', 15],
      'unicorn/filename-case': [
        'error',
        {
          case: 'pascalCase',
        },
      ],
      'no-trailing-spaces': ['error'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'custom-rules/remove-comments': 'error',
      semi: ['error', 'never'],
      'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
      'import/order': ['error', {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      }],
      'no-else-return': 'error',
      'array-callback-return': 'error',
      'consistent-return': 'error',
      'eqeqeq': ['error', 'always'],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
    ignores: ['node_modules/*', 'public/*', 'dist/*', 'src/*.*', 'src/test/*.*'],
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: babelEslintParser,
      parserOptions: {
        configFile: resolve('./babel.config.mjs'),
      },
    },
    rules: {
      'custom-rules/remove-comments': 'error',
      semi: ['error', 'never'],
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'custom-rules/remove-comments': 'off',
    },
  },
  {
    files: ['src/utils/**/*.*'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  },
]
