const { join } = require('path');
const createResolver = require('postcss-import-resolver');

module.exports = () => ({
  sourceMap: true,
  plugins: {
    'postcss-import': {
      resolve: createResolver({
        alias: {
          '~': join(__dirname),
          // '~~': join(__dirname),
          '@': join(__dirname, 'src'),
          // '@@': join(__dirname),
        },
      }),
    },
    'postcss-url': {},
    tailwindcss: './tailwind.js',
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': true,
      },
    },
    'postcss-hexrgba': {},
    autoprefixer: {},
  },
});
