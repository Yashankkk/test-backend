const User = require("../../models/User.model")

const getAllUsers = async(req, res, next) => {
    try {
        const uservalues = await(req.body);
        console.log("values ye hain", uservalues);

        const users = await User.find();
        console.log(users);
        if(!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json(users);
    } catch(error){
        console.error("error",error);
        res.status(500).json ({ error: "Internal Server Error"});
        next(error);
    }
};

module.exports = getAllUsers;