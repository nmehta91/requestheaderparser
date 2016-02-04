'use strict';

var path = process.cwd();


module.exports = function (app) {

	app.get('/', function(req, res) {
		var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;	
		var user_agent = req.headers['user-agent'].split(')')[0].split('(')[1];
		var language = req.headers["accept-language"].split(',')[0];
		
		var obj = {
			"ipaddress": ip,
			"language" : language,
			"software": user_agent,
		};
		res.send(JSON.stringify(obj));
	});
};
