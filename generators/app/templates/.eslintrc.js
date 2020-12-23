module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-default-prop': 0,
    'no-unused-vars': 1,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        trailingComma: 'none'
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
