module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+ doesn't need this
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    react: {
      version: '19', // Specify React version 19
    },
  },
};
