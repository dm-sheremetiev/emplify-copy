const path = require('path');
module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-knobs", "@storybook/preset-create-react-app", "@storybook/addon-control", {
    name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    }
  ],
  // https://medium.com/storybookjs/building-a-front-end-project-with-react-tailwindcss-and-storybook-742bdb1417da
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\,css&/,
      use: [{
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [require('tailwindcss'), require('autoprefixer')]
        }
      }],
      include: path.resolve(__dirname, '../')
    });
    return config;
  },
  core: {
    builder: "webpack5"
  }
};