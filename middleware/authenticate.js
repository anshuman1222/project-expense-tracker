const jwt = require('jsonwebtoken');
const User = require("../models/userModel");

const authenticate = async (req, res, next) => {
    try {
         const token=req.session.token;

        const verifyToken = jwt.verify(token, process.env.KEY);

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!rootUser) { throw new Error('User not found') }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    } catch (error) {
        res.status(400).send('Unauthorized : No token provided');
        console.log(error);
    }
}

module.exports = authenticate

