const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
  configureWebpack: (config)=>{
    config.plugins.push(new SkeletonWebpackPlugin({
      webpackConfig: {
        entry: {
          app: path.join(__dirname, './src/Skeleton.js'),
        },
        router: {
          routes: ['/', '/home']
        }
      },
      minimize: true,
      quiet: true,
      router: {
        mode: 'hash',
        routes: [
         {
          path: '/home',
          skeletonId: 'skeleton-home'
         }
        ]
      }
    })) 
  },
  // css相关配置
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    },
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: false
  },
};