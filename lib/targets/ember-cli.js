module.exports = function(csp) {
  var beautify = require('js-beautify').js_beautify;
  console.log('Add the following lines to your config/environment.js\n');
  var result = 'ENV.contentSecurityPolicy = ' + JSON.stringify(csp) + ';';
  console.log(beautify(result, { indent_size: 2 }));
};
