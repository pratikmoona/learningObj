var creator = require('./creator');

module.exports = {
	create:	function(name, description, tags, cb) {
		var obj = creator.init(name, description, tags, cb);
	}
}
