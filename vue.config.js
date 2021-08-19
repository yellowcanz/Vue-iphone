const webpack = require('webpack');
module.exports = {
  lintOnSave: false,   //加入此行 , false为关闭true为开启
  configureWebpack:{
    plugins:[
      new webpack.ProvidePlugin({
        $:'jquery',
        jquery:'jquery',
        'windows.jQuery':'jquery'
      })
    ]
  }
}