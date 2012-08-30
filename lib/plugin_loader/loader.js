var fs = require('fs');

module.exports = {
	load : function(path) {
		var data = fs.readFileSync(path, 'ascii');
		return JSON.parse(data);
	}
}
