import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importHelpers from 'eslint-plugin-import-helpers'
import react from 'eslint-plugin-react'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

const eslintConfig = [
  {
    ignores: ['types/**/*', '.github/**/*', '.husky/**/*', '.plop/**/*', '.next/**/*', 'public/**/*', 'pnpm-lock.yaml']
  },
  ...compat.extends(
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ),
  {
    plugins: {
      react,
      '@typescript-eslint': typescriptEslint,
      'import-helpers': importHelpers
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },

      parser: tsParser,
      ecmaVersion: 11,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      react: {
        version: 'detect'
      }
    },

    rules: {
      'react-hooks/rules-of-hooks': 2,
      'react-hooks/exhaustive-deps': 1,
      'newline-before-return': 2,
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'prettier/prettier': ['error', { bracketSameLine: false, jsxBracketSameLine: false }],
      'import-helpers/order-imports': [
        2,
        {
          newlinesBetween: 'always',
          groups: [
            'module',
            '/^@/components/',
            '/^@/constants/',
            '/^@/utils/',
            '/^@/hooks/',
            '/^@/services/',
            '/^@/stores/',
            '/^@/styles/',
            '/^@/shared/',
            '/^@/restapi/',
            '/^@/context/',
            ['parent', 'sibling', 'index']
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true
          }
        }
      ],

      '@typescript-eslint/no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_'
        }
      ],

      'no-console': [
        2,
        {
          allow: ['info', 'warn', 'error']
        }
      ]
    }
  }
]

export default eslintConfig
