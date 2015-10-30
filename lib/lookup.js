var request = require('request');

function parseCSP(csp) {
  var split = csp.split(';');
  var result = {};
  split.forEach(function(directive) {
    var directiveSplit = directive.trim().split(' ');
    if (directiveSplit.length > 1)
      result[directiveSplit[0]] = directiveSplit.slice(1).join(' ');
  });
  return result;
}

module.exports = function(url) {
  var opts = {
    url: url,
    method: 'HEAD'
  };
  request(opts, function(error, response, body) {
    var CSP = response.headers['content-security-policy'];
    var XCSP = response.headers['x-content-security-policy'];
    if (!CSP && XCSP) {
      CSP = XCSP;
    }
    if (!CSP) {
      console.error('No Content Security Policy detected');
    }
    console.log('Raw CSP: ' + CSP);
    var parsed = parseCSP(CSP);
    console.log('Directives: ');
    console.log(JSON.stringify(parsed, null, 2));
  });
};