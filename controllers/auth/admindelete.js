const User = require("../../models/User.model")

const getAllUsers = async(req, res, next) => {
    try {
        const { Id } = req.params
        console.log("values ye hain", Id);

        const users = await User.findOneAndDelete({"_id": Id});
        console.log(users);
        if(!users) {
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