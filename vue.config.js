const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",

  transpileDependencies: [
    'vuetify'
  ],

  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    pictures: {
      entry: 'src/pics.js',
      template: 'public/pictures.html',
      filename: 'pictures.html',
    },
    yntmap: {
      entry: 'src/map.js',
      template: 'public/yntmap.html',
      filename: 'yntmap.html',
    }
  },
  pluginOptions: {
    webpack: {
      dir: [
        './webpack'
      ],
      externals: {
        'BMap': 'BMap',
        'BMap_Symbol_SHAPE_POINT': 'BMap_Symbol_SHAPE_POINT'
      },
    }
  }
})
