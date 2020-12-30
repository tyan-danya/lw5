module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: [
    "airbnb-base",
    'prettier'
  ],
  plugins: [
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    'linebreak-style': 0,
    'no-plusplus': 0,
    'prettier/prettier': 0,
    'no-param-reassign': 0,
    'no-undef': 0,
    'no-use-before-define': 0,
    'import/extensions': 0
  }
};