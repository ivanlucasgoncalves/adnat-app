const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
//const AppleStrategy = require('passport-apple');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const bcrypt = require('bcrypt');
const User = mongoose.model('user');

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.



passport.serializeUser((user, done) => {
	done(null, user.id);
	//console.log(user);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
	//console.log(id);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true,
		},
		//test
		/*
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
    }*/
    
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser) {
				//already have a record with the given profile ID
				return done(null, existingUser);
			} else {
        
				//We don't have a record with this ID, make a new record
				const user = await new User({
					googleId: profile.id,
					fullName: profile.displayName,
					email: profile.emails[0].value,
					provider: profile.provider,
					firstName: profile.name.givenName,
					lastName: profile.name.familyName,
					photo: profile.photos[0].value,
					emailVerified: true
				}).save().then(user => done(null, user));
			}
		}
	)
);

passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			//session: true,
			//proxy: true,
			//passReqToCallback: true,
		},
		async (email, password, done) => {
			User.findOne({ email: email }, (err, user) => {
			  //if (!user.emailVerified) return (null, false);
				if (!user) return done(null, false);
				bcrypt.compare(password, user.password, (err, result) => {
					if (result === true) {
						return done(null, user);
					}
					else {
						return done(null, false);
					}
				});
			});
		}
	)
);

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookClientID,
			clientSecret: keys.facebookClientSecret,
			callbackURL: '/auth/facebook/callback',
			proxy: true,
		},
		async (accessToken, refreshToken, profile, done) => {
			console.log(profile);

			const existingUser = await User.findOne({ facebookId: profile.id });
			if (existingUser) {
				//already have a record with the given profile ID
				return done(null, existingUser);
			}
			//We don't have a record with this ID, make a new record
			const user = new User({
				facebookId: profile.id,
				fullName: profile.displayName,
				provider: profile.provider,
				firstName: profile.name.givenName,
				lastName: profile.name.familyName,
				emailVerified: true
			}).save().then(user => done(null, user));
		}
	)
);
/*
passport.use(
  new AppleStrategy(
    {
      clientID: '',
      teamID: '',
      callbackURL: '',
      keyID: '',
      privateKeyLocation: '',
      passReqToCallback: true,
    },
    function (req, accessToken, refreshToken, decodedIdToken, profile, cb) {
      // Here, check if the decodedIdToken.sub exists in your database!
      // decodedIdToken should contains email too if user authorized it but will not contain the name
      // `profile` parameter is REQUIRED for the sake of passport implementation
      // it should be profile in the future but apple hasn't implemented passing data
      // in access token yet https://developer.apple.com/documentation/sign_in_with_apple/tokenresponse
      cb(null, decodedIdToken);
    }
  )
);*/




// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.







