const axios = require('axios');
const jwt = require('jsonwebtoken');
const { oauth2Client } = require('../utils/googleClient');
const User = require('../../models/User.model');
const google = require('../../models/Google');
const Google = require('../../models/Google');

const googleAuth = async (req, res, next) => {

    try {
        const code = req.query.code;
        console.log("yeh aya code frontend say", code);
        const googleRes = await oauth2Client.getToken(code);
        console.log("yeh raha google res",googleRes);
        oauth2Client.setCredentials(googleRes.tokens.access_token);
        console.log("yeh raha google res",googleRes);

        const userRes = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
        );
        const { email, name, picture } = userRes.data;
        console.log("yeh ha user res",userRes);
        // let user = await User.findOne({ email });

        // if (!user) {
        //     user = await User.create({
        //         name,
        //         email,
        //         image: picture,
        //     });
        // }
const userCheck = await Google.findOne({ email });
console.log("userCheck",userCheck)
if (userCheck) {
    return res.status(404).json({
        message: "User not found",
    })}
    const newUser =  new Google({
        name,
        email,
    })
    console.log("newUser",newUser)
    await newUser.save()
        // const { _id } = user;
        // const token = jwt.sign({ _id, email },
        //     process.env.JWT_SECRET, {
        //     expiresIn: process.env.JWT_TIMEOUT,
        // });
        res.status(200).json({
            message: 'success',
            // token,
            // user,
            newUser
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
};
module.exports = googleAuth