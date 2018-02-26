const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const root = path.resolve(__dirname, '..')
const webRoot = path.resolve(__dirname)
const src = path.resolve(root, 'src')
const webSrc = path.resolve(webRoot, 'src')
const htdocs = path.resolve(webRoot, 'htdocs')
const modules = path.resolve(root, 'node_modules')
const dist = path.resolve(webRoot, 'dist')

module.exports = {
  entry: path.resolve(webSrc, 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: dist
  },
  resolve: {
    alias: {
      'life': src,
      'react-native': 'react-native-web',
      'react-native-vector-icons': 'react-native-vector-icons/dist',
    },
    extensions: ['.web.ts', '.web.tsx', '.ts', '.tsx', '.d.ts', '.js', '.json'],
  },
  devServer: {
    contentBase: webSrc,
    historyApiFallback: true,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(webRoot, 'htdocs/index.ejs'),
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(modules, 'font-awesome'),
      to: path.resolve(dist, 'fonts/font-awesome'),
    }]),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.scss$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }] },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.ttf$/, loader: 'url-loader', include: path.resolve(modules, 'react-native-vector-icons'),
      },
    ]
  }
}
