const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  // 基本路径

  publicPath: '/',

  // 输出文件目录

  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查

  lintOnSave: true,
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "@/scss/variables.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module.rule('image')
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  },
  configureWebpack: config => {
    let plugins = []
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      console.log(config)
    } else {
      // 为开发环境修改配置...
    }
    plugins.push(
      new BundleAnalyzerPlugin({
        statsOptions: {
          reasons: true
        }
      })
    )
    return {
      plugins: plugins
    }
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 9001,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: null, // string | Object
    before: app => {
      // `app` 是一个 express 实例
    }
  }
}
