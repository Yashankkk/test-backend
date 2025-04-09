const User = require("../../models/User.model");
const { registrationValidation } = require("../../services/validation");

const register = async (req, res, next) => {
  try {
    const registerValues = await (req.body);
    console.log("values aa gu",registerValues);
    const { fullName, username, email, phone, password, confirm } = registerValues;

    const userVerification = await User.findOne({
      username,
    });
    const userEmailAddress = await User.findOne({
      email,
    });
    console.log(userVerification);
    if (userVerification) {
      return res.status(400).json({
        success: false,
        message: "User Exist already",
      });
    }

    if (userEmailAddress) {
      return res.status(400).json({
        success: false,
        message: "User Email exists",
      });
    }
    
    const newUser = new User({
      fullName,
      username,
      email,
      phone,
      password,
      confirm,
    });
    await newUser.save();

    res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: registerValues,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;