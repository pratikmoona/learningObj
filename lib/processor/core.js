module.exports = {
	process : function(commands) {
		async.forEachSeries(commands, intProcess);
	}
}

function intProcess(command, cb) {
	logger.debug("Processing command: " + JSON.stringify(command));
	cb();
}
