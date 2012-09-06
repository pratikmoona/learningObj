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
		params.description.forEach(function(param){
			keys = Object.keys(param);
			keys.forEach(function(key){
				logger.debug("Processing Command [" + JSON.stringify(key) + "]");
				process[key](param[key]);
			});
		});
		cb();
	},
	"text" : function(param) {
		logger.debug("Text Field [" + JSON.stringify(param) + "]");
	},
	"diagram" : function(param) {
		logger.debug("Diagram Field [" + JSON.stringify(param) + "]");
	},
	"code" : function(param) {
		logger.debug("Code Field [" + JSON.stringify(param) + "]");
	},
	"explanation" : function(param) {
		logger.debug("Explanation Field [" + JSON.stringify(param) + "]");
	}
}