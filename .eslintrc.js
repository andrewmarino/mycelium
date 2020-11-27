module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    semi: [2, 'always']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
