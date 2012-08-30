var argv = require('optimist')
	.usage('Usage: -p [path]')
	.demand(['p'])
	.argv;
var util = require('./lib/util/environ');
var plugin_loader = require('lib/plugin_loader/loader');

plugin_loader.load(argv.p);
