module.exports = {
  plugins: [
    '@emotion',
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ],
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
};
