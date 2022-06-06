//import mongoose from 'mongoose';
//import beautifyUnique from 'mongoose-beautiful-unique-validation';
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const userSchema = new Schema({
	firstName: {
		type: String,
		//required: true,
	},
	lastName: {
		type: String,
		//required: true,
	},
	email: {
		type: String,
		//required: true,
		//unique: 'Two users cannot share the same email ({VALUE})',
	},
	password: {
		type: String,
		//required: true,
	},
	emailVerified: {
		type: Boolean,
		//required: true,
	},
	photo: {
		type: String,
		//required: true,
	},
	provider: {
		type: String,
		//required: true,
	},
	fullName: {
		type: String,
		//required: true,
	},
	googleId: {
		type: String,
		//required: true,
	},
	facebookId: {
		type: String,
		//required: true,
	},
	phone: {
		type: Number,
		//required: true,
	},
	token:String
});

// Enable beautifying on this schema
//userSchema.plugin(beautifyUnique);

//const User = mongoose.model('user', UserSchema);
mongoose.model('user', userSchema);
//module.exports = User;
