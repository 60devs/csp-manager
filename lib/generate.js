module.exports = function(csp, target) {
  var targets = {
    'koajs-lusca': require('./targets/koajs-lusca'),
    'koajs': require('./targets/koajs'),
    'apache': require('./targets/apache'),
    'nginx': require('./targets/nginx'),
    'ember-cli': require('./targets/ember-cli'),
    'browser-sync': require('./targets/browser-sync')
  };

  if (csp) {
    if (target === '*') {
      Object.keys(targets).forEach(function(target) {
        console.log('CSP for ' + target + ':');
        targets[target](csp);
        console.log();
      });
    } else if (target in targets) {
      targets[target](csp);
    } else {
      console.error('Target ' + target + ' does not exit');
    }
  }
};
