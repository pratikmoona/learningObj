var creator = require('./creator');

module.exports = {
	create: function(name, attribute, tags, cb) {
		var course = creator.init(name, attribute, tags, cb);
	}
}
