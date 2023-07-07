const UserSchema = require("../models/userModel")
const jwt = require('jsonwebtoken')


exports.loginUser=async(req,res)=>{
    const {email,password}=req.body
    try {
        if (!email || !password) {
            return res.status(400).json({ error: "Fill All Data Fields" })
        }
        const userLogin = await UserSchema.findOne({ email: email })
        if (userLogin) {
            const isMatch = userLogin.password;

            const token = await userLogin.generateAuthTokon()

            req.session.token = token;

            console.log(token)

            if (password === isMatch) {
                res.status(200).json({ message: "user sigin successfully" })
            }
            else {
                res.status(400).json({ error: "Invalid Credentials" })
            }
        }
        else{
            res.status(400).json({ error: "Invalid Credentials" })
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}


exports.registerUser=async(req,res)=>{
    const {name,email,password}=req.body
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ error: "Fill All Data Fields" })
        }
        const response = await UserSchema.findOne({ email: email })
        if (response) {
            return res.status(400).json({ error: "Email already exist" })
        }
        else {
            const user = new UserSchema(req.body)

            const userRegister = await user.save()

            if (userRegister) {
                res.status(200).json({ message: "user registered succesfully" })
            }
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.userVerification=(req,res)=>{
    res.send(req.rootUser);
}

exports.userLogout=(req,res)=>{
    res.clearCookie("jwtoken");

    res.status(200).send('User Logout');
}
