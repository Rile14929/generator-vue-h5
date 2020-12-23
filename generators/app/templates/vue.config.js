// vue.config.js
const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

const plugins = [];

if (process.env.ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  productionSourceMap: false,
  publicPath: '/',
  devServer: {
    proxy: ''
  },
  configureWebpack: config => {
    config.plugins = [
      ...config.plugins,
      ...plugins,
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ];
    config.performance = {
      hints: false
    };
    config.optimization = {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    };
  },
  chainWebpack: config => {
    config.output.filename('[name].[hash].js').end();
    config.resolve.alias.set('@', resolve('src'));
    config.plugins.delete('prefetch');
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "~@/assets/less/vant.less";`
        },
        javascriptEnabled: true
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['./src/assets/less/variable.less']
    }
  }
};
