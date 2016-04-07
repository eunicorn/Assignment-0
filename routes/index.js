var models = require('../models');

exports.view = function(req, res) {
	models.Message.find().sort('-created').exec(displayPosts);

	function displayPosts(err, message_posts){
		if (err){
			console.log(err);
			res.send(500);
		}
		var data = {data: message_posts}
		res.render("index", data);
	}
    
}
