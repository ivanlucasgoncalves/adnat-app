const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User'); //has to come before services/passport, position matter here.
require('./services/passport'); 

// DB Connect
mongoose.connect(keys.mongoURI, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// Init Express
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

/*TESTING
app.use((req, res, next) => {
	console.log('req session' , req.session);
	console.log('req user', req.user);
	next();
});*/


// Define routes.
require('./routes/googleAuthRoutes')(app);
require('./routes/facebookAuthRoutes')(app);
require('./routes/localAuthRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	//express will serve up production assets like our main.js file, or main.css file
	app.use(express.static('client/build'));
	//express will serve up the index.html file if it doesnt recognize the route
	const path = require('path');
	app.use('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);