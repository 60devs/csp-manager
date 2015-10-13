module.exports = function(csp) {
  var beautify = require('js-beautify').js_beautify;
  console.log('Add the following lines to your KoaJS app\n');
  var result = ['app.use(lusca({',
    'csp: ' + JSON.stringify(csp) + ',',
    '}));'].join('\n');
  console.log(beautify(result, { indent_size: 2 }));
};
