module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/import-extensions': 'off',
    quotes: 'warn',
    'object-curly-spacing': 'warn',
    'import/extensions': 'off',
    'key-spacing': 'warn',
    'comma-spacing': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/function-component-definition': 'off',
    'react/jsx-no-bind': 'off',
    'class-methods-use-this': 'off',
    'implicit-arrow-linebreak': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'no-useless-constructor': 'off',
    'react/require-default-props': 'warn',
    'no-empty-function': 'warn',
    'no-shadow': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-unused-vars': 'warn',
    'react/button-has-type': 'off',
  },
};
