module.exports = function() {
  var fs = require('fs');
  var csp = null;
  try {
    csp = JSON.parse(fs.readFileSync(process.cwd() + '/csp.json', 'utf-8'));
  } catch (err) {
    console.error('./csp.json is invalid');
  }
  return csp;
};
