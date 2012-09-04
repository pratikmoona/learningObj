module.exports = {
	process : function(commands) {
		async.forEachSeries(commands, intProcess);
	}
}

function intProcess(command, cb) {
	logger.debug("Processing command [" + command.name + "]");
	process[command.name](command.params, cb);
	cb();
}

var process = {
	"add" : function(params, cb) {
		logger.debug("Command ADD with params [" + JSON.stringify(params) + "]");
		cb();
	}
}
