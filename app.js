var argv = require('optimist')
	.usage('Usage: -p [path]')
	.demand(['p'])
	.argv;
var util = require('./lib/util/environ');
var loader = require('./lib/plugin_loader/loader');

var commands = loader.load(argv.p);

logger.debug(JSON.stringify(commands));
