const path = require('path');

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {    
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader']
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: ['url-loader']
        }
      ]
    }
  },                      
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/Provider.js')
  }
};
