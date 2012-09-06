var ltx = require('ltx');
var functions = require('./util');

module.exports = {
	init: function(name, description, tags, cb) {
		var obj = new ltx.Element('root')
			.c('module', { id : functions.genNewId()})
				.c('meta')
					.c('name').t(name).up()
					.c('tags').t(tags).up()
				.up();
		logger.debug("XML Module is " + obj.up());
		cb();
	}
}
