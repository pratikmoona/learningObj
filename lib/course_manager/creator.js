var ltx = require('ltx');
var functions = require('./util');
module.exports = {
	init: function(name, attribute, tags, cb) {
		var course = new ltx.Element('root')
			.c('course', { id : functions.genNewId()})
				.c('meta')
					.c('name').t(name).up()
					.c('tags').t(tags).up()
				.up();
		logger.debug("XML Course is " + course.up());
		cb();
	}
}
