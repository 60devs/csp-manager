module.exports = function(csp) {
  var result = [];
  Object.keys(csp).forEach(function(directive) {
    result.push(directive + ' ' + csp[directive])
  });
  var header = result.join('; ');
  return header;
}