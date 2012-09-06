var creator = require('./creator');

module.exports = {
	create:	function(name, attribute, tags, cb) {
		var obj = creator.init(name, attribute, tags, cb);
	}
}
