/** @type {import("stylelint").Config} */
export default {
  root: true,
  // 继承某些已有的规则
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
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
    '**/*.cjs',
  ],
};
