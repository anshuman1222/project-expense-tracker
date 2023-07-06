const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,

    },
    tokens: [{
        token: {
            type: String,
            required: true 
        }
    }]
}, { timestamps: true })

Userschema.methods.generateAuthTokon = async function () {
    try {
        let createdtoken = jwt.sign({ _id: this._id }, process.env.KEY);
        this.tokens = this.tokens.concat({ token: createdtoken });
        await this.save();
        return createdtoken;
    } catch (error) {
        console.log(error);
    }
}


const User = mongoose.model('USER', Userschema);

module.exports = User;
