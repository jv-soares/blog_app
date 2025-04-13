module.exports = {
  extends: ['eslint-config-airbnb-base'],
  overrides: [
    {
      files: ['tests/**'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },
  ],
};
