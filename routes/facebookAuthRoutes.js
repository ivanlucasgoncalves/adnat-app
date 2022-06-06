const passport = require('passport');

module.exports = app => {
	app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

	app.get('/auth/facebook/callback', passport.authenticate('facebook'),
		(req, res) => {
			res.redirect('/');
		}
	);
};




/*
	app.get('/profile', (req, res) => {
		res.send('You are a valid user');
	});

	app.get('/failed', (req, res) => {
		res.send('You are not a valid user');
	});*/
