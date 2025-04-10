const User = require("../../models/User.model")

const getAllContacts = async(req, res, next) => {
    try {
        const { id } = req.params;
        console.log("values ye hain", id);

        const contacts = await User.updateOne({"_id": id});
        console.log(contacts);
        if(!contacts) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json(contacts);
    } catch(error){
        console.error("error",error);
        res.status(500).json ({ error: "Internal Server Error"});
        next(error);
    }
};

module.exports = getAllContacts;