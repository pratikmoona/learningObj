var fs = require('fs');

module.exports = {
	load : function(path) {
		var data = fs.readFileSync(path, 'ascii');
		var regex = new RegExp("'", 'g');
		data = data.replace(regex, '"');
		return JSON.parse(data);
	}
}
