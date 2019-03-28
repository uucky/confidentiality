module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 'corejs@3',
      },
    ],
  ],
  ignore: [/\/core-js/],
};
