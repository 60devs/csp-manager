#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var command = argv._[0];
var usage = [
  'Usage:',
  '',
  'csp-manager init - creates the source json file with default CSP',
  'csp-manager generate <tool> - generates a CSP in a format suitable for <tool>',
  '',
  'Supported tools:',
  'koajs-lusca, koajs, apache, nginx, ember-cli, browser-sync'
].join('\n');

switch (command) {
  case 'init':
    var init = require('./lib/init');
    init();
    break;
  case 'generate':
    var target = argv._[1];
    var generate = require('./lib/generate');
    var read = require('./lib/read');
    generate(read(), target ? target : '*');
    break;
  default:
    console.log(usage);
}
