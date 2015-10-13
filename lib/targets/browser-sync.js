module.exports = function(csp) {
  var header = require('./utils/header');
  console.log('Add the following lines to browser sync configuration (gulp)\n');
  var result = ['browserSync.init({',
'    server: {',
'        baseDir: "./",',
'        middleware: function (req, res, next) {',
'            res.setHeader("Content-Security-Policy", "' + header(csp) + '");',
'            res.setHeader("X-Content-Security-Policy", "' + header(csp) + '");',
'            next();',
'        }',
'    }',
'});'].join('\n');
  console.log(result);
};

