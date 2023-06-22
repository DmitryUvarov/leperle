const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/style.scss";`
      },
    }
  }
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@js': path.resolve(__dirname, 'src/assets/js')
      }
    }
  }
};
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        // Укажите путь к вашему основному SCSS файлу
        path.resolve(__dirname, 'src/assets/scss/style.scss'),
      ],
    },
  },
};
