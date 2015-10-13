var defaultCSP ={
  'base-uri': "'self'",
  'connect-src': "'self'",
  'default-src': "'self'",
  'font-src': "'self'",
  'frame-ancestors': "'self'",
  'frame-src': "'self'",
  'img-src': "'self'",
  'manifest-src': "'self'",
  'media-src': "'self'",
  'object-src': "'self'",
  'script-src': "'self'",
  'style-src': "'self'",
};

module.exports = function() {
  var fs = require('fs');
  fs.writeFileSync(process.cwd() + '/csp.json', JSON.stringify(defaultCSP, null, 2));
};
