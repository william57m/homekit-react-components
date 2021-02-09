const path = require('path');

module.exports = {                     
  styleguideComponents: {
    Wrapper: path.join(__dirname, './Provider.js')
  },
  components: '../src/components/*.js',
  ignore: ['../src/components/index.js']
};
