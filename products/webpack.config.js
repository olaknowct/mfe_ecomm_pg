const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    // checks every thing webpack build and add it automatically into the template
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
