module.exports = function(app) {
	
	user = app.controllers.user;
	
	app.get('/api/user/get', user.get);
	app.post('/api/user/post', user.post);
	app.put('/api/user/put', user.put);
	app.delete('/api/user/delete', user.delete);

};
