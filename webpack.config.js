const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'code-source-plugin.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] },
      },
      {
        test: /\.ts/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
};
