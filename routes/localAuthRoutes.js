const passport = require('passport');
const express = require('express');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = mongoose.model('user');
const randomToken = require('random-token');
const Mailer = require('../services/Mailer');
const signUpTemplate = require('../services/emailTemplates/SignUpTemplate');
const ResetPassTemplate = require('../services/emailTemplates/ResetPassTemplate');


module.exports = app => {

	app.post('/api/login', (req, res, next) => {
		passport.authenticate('local', (err, user, info) => {
			if (err) throw err;
			if (!user) res.send('Incorrect credentials'); 
			else {
				req.login(user, err => {
					if (err) throw err;
					res.send('Successfully Authenticated'); 
				});
			}
		})(req, res, next);
	});

	app.get('/user', (req, res) => {
		res.send(req.user);
	});

	//Register Page
	app.post('/api/register', async (req, res, done) => {
		const { email, fullName, phone, password } = req.body;
    
		if (!email) {
			res.send('Email is required');
			return done(null, email);
		}

		if (!fullName) {
			res.send('Full name is required');
			return done(null, fullName);
		}

		if (!password) {
			res.send('Password is required');
			return done(null, password);
		}
		const hash = bcrypt.hashSync(password, 10);
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			res.send('Email already exist');
			return done(null, existingUser);

		} else {
			const token = randomToken(50);
			if (!existingUser) {

				const user = new User({
					email,
					fullName,
					phone,
					password: hash,
					provider: 'Local',
					token,
					emailVerified: false,
				});

				// TODO - This is throwing an error in my local, commenting out for now.
				// const validationMailer = new Mailer(
				// 	{ subject: 'Email Confirmation', email },
				// 	signUpTemplate(user)
				// );
				// await validationMailer.send();
				try {
					await user.save();
					res.send('registered');
				} catch (err) {
					res.status(471).send(err);
				}
			}
		}
	});
  
	//Verify email
	app.get('/api/emailvalidation/:id', async (req, res) => {
		const token = req.params.id;
		await User.updateOne({ token }, { emailVerified: true, token: randomToken(50) }, function (err, docs) {
			if (err) {
				console.log(err);
				res.send('There was an error, please try again later');
			}
			else if (docs.nModified === 0) {
				res.send('We could not verify your email, please try again later');
			} else if (docs.nModified > 0) {
				res.send('Email has been verified, you can now log in');
			}
		});
	});

	// Sending Email  - Reset password request
	app.post('/api/reqresetpass', async (req, res) => {
		const { email } = req.body;
		const user = await User.findOne({ email });
		if (resetPassUser) {
			const resetPassMailer = new Mailer(
				{ subject: 'Reset Password', email },
				ResetPassTemplate(user)
			);
			await resetPassMailer.send().then(res => { console.log(res); }).catch(e => { console.log(e); });
			res.send(
				'We have sent a reset password to your registered email address'
			);

			//Token expires in 2 hours
			renewToken = async () => {
				await User.updateOne({ email }, { token: randomToken(50) }); console.log('timeout');
			};
			setTimeout(renewToken, 121 * 60000);
		} else {
			res.send('Email does not exist');
		}
	});

	// New password
	app.post('/api/newpass', async (req, res) => {
		const { password, token } = req.body;

		// Hash password
		const hashPassword = bcrypt.hashSync(password, 10);
    
		// Update password
		await User.updateOne({ token }, { password: hashPassword }, function (err, docs) {
			if (err) {
				console.log(err);
				res.send('There was an error, please try again later');
			}
			else if (docs.nModified === 0) {
				res.send('We could not reset your password, please try again later');
			} else if (docs.nModified > 0) {
				res.send('New Password has been recorded, you can now log in');
			}
		});
	});

	app.get('/api/test', async (req, res) => {
		res.send('3s');
	});
};


