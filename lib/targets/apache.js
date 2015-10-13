module.exports = function(csp) {
  var header = require('./utils/header');
  console.log('Add the following lines to your Apache config')
  var result = [
    '<IfModule mod_headers.c>',
    '  Header set Content-Security-Policy "' + header(csp) + '"',
    '  Header set X-Content-Security-Policy "' + header(csp) + '"',
    '</IfModule>'
  ].join('\n');
  console.log(result);
};