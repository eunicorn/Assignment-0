var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    // your solution here
    var message = new models.Message({
    	"email":req.body.email,
    	"content":req.body.content,
    	"created": new Date()
    });

    models.Message.find({}).exec(saveMsg);

    function saveMsg(err, msg_post) {
    	if(err) {
    		console.log(err);
    		res.send(500);
    		res.redirect('/');
    	}
        var data = {
            data: msg_post
        };
        
        message.save(function(){
            res.redirect('/');
        })
    }
};