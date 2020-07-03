const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'xbrz.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'xbrz',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true
      })
    ]
  }
}
