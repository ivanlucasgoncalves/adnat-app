const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const { registerValidation } = require('../../api/middlewares/validation');

// Users Model
const User = mongoose.model('user');


module.exports = app => {
	// @route POST api/user
	// @desc Add user
	// @access Public
	app.post('/registerx', async (req, res) => {
		// Validation
		const { error } = registerValidation(req.body);
		if (error) return res.status(400).send(error.details[0].message);

		// Checking if the user is already in the db
		const emailExist = await User.findOne({ email: req.body.email });
		if (emailExist) return res.status(400).send('Email already exists');

		// Hash password
		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		// Creating new user
		const newUser = new User({
			fullName: req.body.fullName,
			email: req.body.email,
			password: hashPassword,
		});

		try {
			const user = await newUser.save();
			// TODO - For testing purpose keep sending the entire user object. Delete it once in production.
			res.send(user);
			// res.send({ user: user._id });
		} catch (err) {
			res.status(400).send(err);
		}
	});
};
