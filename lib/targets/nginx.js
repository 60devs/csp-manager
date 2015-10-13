module.exports = function(csp) {
  var header = require('./utils/header');
  console.log('Add the following lines to your NGINX location\n');
  var result = [
    'add_header Content-Security-Policy "' + header(csp) + '"',
    'add_header X-Content-Security-Policy "' + header(csp) + '"',
  ].join('\n');
  console.log(result);
};
