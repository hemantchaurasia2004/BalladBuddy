const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');
const crypto = require('crypto');

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    year: {type: String, required: true},
    course: {type: String, required: true},
    verified: {type: Boolean, required: false},
    voted: {type: Boolean, required: false},
    emailToken: {type: String}
});

userSchema.statics.signup = async function(email, password, year, course) {
    
    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    if (!validator.isEmail(email)) {
        throw new Error('Email is invalid');
    }

    if(!validator.isStrongPassword(password)) {
        throw new Error('Password is invalid');
    }

    const exists = await this.findOne({email});
    
    if (exists) {
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new this({email, password: hashedPassword, year, course, verified: false, voted: false,emailToken: crypto.randomBytes(64).toString('hex')});

    return user.save();
}

userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const user = await this.findOne({email});

    if (!user) {
        throw new Error('User does not exist');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Invalid password');
    }

    return user;
}


module.exports = mongoose.model('User', userSchema);