module.exports = {
  extends: ['eslint-config-airbnb-base'],
  env: { node: true },
  overrides: [
    {
      files: ['tests/**'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },
  ],
  rules: {
    'no-console': 'off',
    'consistent-return': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
  },
};
