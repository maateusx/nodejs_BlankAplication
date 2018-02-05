module.exports = function(app) {
	
	User = app.models.user;

	var userController = {
		get: function(req,res){
			User.find({},function(error, users){
				res.json(users) //List all users
			});
		},
		post: function(req, res){
			res.json({message: "HELLO WORLD"})
		},
		put: function(req, res){
			res.json({message: "HELLO WORLD", secondMessage: "SECOND HELLO WORLD"})
		},
		delete: function(req, res){
			res.statusCode = 400;
			res.json({error: "UNAUTHORIZED"})
		}
	}

	return userController;
};