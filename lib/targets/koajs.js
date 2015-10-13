module.exports = function(csp) {
  var beautify = require('js-beautify').js_beautify;
  var header = require('./utils/header');
  console.log('Add the following lines to your KoaJS middleware\n');
  var result = [
    'this.set("Content-Security", "' + header(csp) + '");',
    'this.set("X-Content-Security-Policy", "' + header(csp) + '");'
  ].join('\n');
  console.log(beautify(result, { indent_size: 2 }));
};