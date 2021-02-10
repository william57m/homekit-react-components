const path = require('path');

module.exports = {    
  webpackConfig: require('../webpack.config.dev.js'),                 
  styleguideComponents: {
    Wrapper: path.join(__dirname, './Provider.js')
  },
  components: '../src/components/*.js',
  ignore: ['../src/components/index.js']
};
