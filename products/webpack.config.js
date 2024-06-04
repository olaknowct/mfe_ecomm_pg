const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        // alias - directory
        './ProductsIndex': './src/index',
      },
    }),
    // checks every thing webpack build and add it automatically into the template
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
