const User = require("../../models/User.model")

const getAllUsers = async(req, res, next) => {
    try {
        const id = req.params
        console.log("values ye hain", id);

        const users = await User.deleteOne({"id": id});
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