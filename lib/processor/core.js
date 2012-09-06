var module = require('../module_manager/core');
var course = require('../course_manager/core');

module.exports = {
	process : function(commands) {
		logger.debug("Number of commands: " + commands.length);
		async.forEachSeries(commands, intProcess);
	}
}

function intProcess(command, cb) {
	logger.debug("Processing command [" + command.name + "]");
	process[command.name](command.params, cb);
}

var process = {
	"add" : function(params, cb) {
		logger.debug("Command ADD with params [" + JSON.stringify(params) + "]");
		if(params.type === "module")
			module.create(params.name, params.description, params.tags, cb);
		else if(params.type === "course")
			course.create(params.name, params.description, params.tags, cb);
	}
