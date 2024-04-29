module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-less'],
  rules: {
    // your rules
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['page'],
      },
    ],
  },
};
