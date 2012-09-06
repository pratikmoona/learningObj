var lobj = require('./../module_manager/core.js');
var course = require('./../course_manager/core.js');

module.exports = {
	process : function(commands) {
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
			lobj.create(params.name, params.attributes, params.tags, cb);
		else if(params.type === "course")
			course.create(params.name, params.attributes, params.tags, cb);
	}
}
