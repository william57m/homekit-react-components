const path = require('path');

module.exports = {    
  webpackConfig: require('./webpack.config.js'),                 
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
          name: 'Accessories',
          exampleMode: 'collapse',
          usageMode: 'expand',
          components: [
            '../src/components/accessories/BinarySensorCard/BinarySensorCard.tsx',
            '../src/components/accessories/CameraCard/CameraCard.tsx',
            '../src/components/accessories/LightCard/LightCard.tsx',
            '../src/components/accessories/SwitchCard/SwitchCard.tsx',
            '../src/components/accessories/ThermostatCard/ThermostatCard.tsx',
          ],
        },
        {
          name: 'Scenes',
          exampleMode: 'collapse',
          usageMode: 'expand',
          components: '../src/components/scenes/SceneCard/SceneCard.tsx',
        },
        {
          name: 'Layouts',
          exampleMode: 'collapse',
          usageMode: 'expand',
          components: '../src/components/layout/SectionLayout/SectionLayout.tsx',
        },
        {
          name: 'Icons',
          exampleMode: 'collapse',
          usageMode: 'expand',
          content: '../src/components/icons/index.md',
        },
      ],
    },
  ],
};
