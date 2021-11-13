const path = require('path');

module.exports = {    
  webpackConfig: require('../webpack.config.dev.js'),                 
  styleguideComponents: {
    Wrapper: path.join(__dirname, './Provider.js'),
  },
  styleguideDir: '../dist_doc',
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  ignore: ['../src/**/index.ts'],

  sections: [
    {
      name: 'UI Components',
      sections: [
        {
          name: 'Devices',
          exampleMode: 'collapse',
          usageMode: 'expand',
          components: [
            '../src/components/devices/CameraCard.tsx',
            '../src/components/devices/LightCard.tsx',
            '../src/components/devices/ThermostatCard.tsx',
          ],
        },
        {
          name: 'Scenes',
          exampleMode: 'collapse',
          usageMode: 'expand',
          components: '../src/components/scenes/*.tsx',
        },
        {
          name: 'Layout',
          exampleMode: 'collapse',
          usageMode: 'expand',
          components: '../src/components/layout/SectionLayout.tsx',
        },
      ],
    },
  ],
};
