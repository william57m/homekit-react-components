const path = require('path');

module.exports = {    
  webpackConfig: require('../webpack.config.dev.js'),                 
  styleguideComponents: {
    Wrapper: path.join(__dirname, './Provider.js'),
  },
  components: '../src/components/*.tsx',
  ignore: ['../src/**/index.ts'],
  styleguideDir: '../dist_doc',
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
};
