module.exports = {
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {    
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'url-loader',
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: ['url-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
