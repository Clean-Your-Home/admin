import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

export default tseslint.config(
  {
    ignores: ['.vscode', 'node_modules/**/*', 'dist', '**/vite-env.d.ts', '**/*.d.ts']
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      'unicorn': eslintPluginUnicorn
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...reactHooks.configs['recommended-latest'].rules,
      ...reactRefresh.configs.vite.rules,
      ...jsxA11y.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/prefer-as-const': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'error',

      'unicorn/prefer-module': 'error',
      'unicorn/no-null': 'error',
      'unicorn/prefer-top-level-await': 'error',
      'unicorn/no-array-callback-reference': 'error',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/filename-case': [
        'error',
        {
          cases: { kebabCase: true, pascalCase: true, camelCase: true }
        }
      ],
      'unicorn/no-useless-undefined': 'error',
      'unicorn/prefer-optional-catch-binding': 'error',
      'unicorn/no-unreadable-array-destructuring': 'error',
      'unicorn/number-literal-case': 'off',
      'unicorn/template-indent': 'off'
    }
  }
)
