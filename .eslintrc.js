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
    'no-unused-vars': 'warn',
    'comma-spacing': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/function-component-definition': 'off',
    'react/jsx-no-bind': 'off',
    'class-methods-use-this': 'off',
    'implicit-arrow-linebreak': 'warn',
  },
};
