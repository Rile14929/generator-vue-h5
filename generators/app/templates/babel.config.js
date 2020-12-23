module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    'equire',
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: name => `${name}/style/less`
      },
      'vant'
    ],
    ['@babel/plugin-proposal-optional-chaining']
  ]
};
