module.exports = function(app) {
	var mongoose = require('mongoose');

	var userSchema = mongoose.Schema({
		email: {type: String, index: {unique: true }, require: true},
		name: String,
		avatar: {type: String, default: 'img/placeholder.jpg'}
	});

	User = mongoose.model("User", userSchema);
	return User;
};

