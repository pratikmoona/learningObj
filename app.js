var argv = require('optimist')
	.usage('Usage: -p [path]')
	.demand(['p'])
	.argv;
require('./lib/util/environ');
var loader = require('./lib/plugin_loader/core');
var processor = require('./lib/processor/core');
logger.debug("Reading file from " + argv.p);
var commands = loader.load(argv.p);
processor.process(commands);
logger.debug(JSON.stringify(commands));
