const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.@(js|ts|vue)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3-vite',
  viteFinal: (config) => {
    // Preload SCSS variables
    config.css = {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/css/variables.scss";`
        }
      }
    };
    // Resolve aliases
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    return config;
  }
};
