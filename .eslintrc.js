module.exports = {
  extends: ['taro/react'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-commonjs': 0,
    '@typescript-eslint/consistent-type-imports': 2,
    'jsx-quotes': ['error', 'prefer-double'],
    quotes: ['error', 'single'], // 使用单引号
    semi: ['error', 'always'], // 结束添加分号
  },
};
