const hook = require('css-modules-require-hook');
const parser = require('postcss-less').parse;

hook({
  extensions: '.less',
  generateScopedName: '[name]__[local]___[hash:base64:5]',
  processorOpts: {
    parser
  }
});

global.document = require('jsdom').jsdom('<body></body>');
global.window = document.defaultView;
global.navigator = window.navigator;
