const Contact = require("../../models/Contact")

const getAllContacts = async(req, res, next) => {
    try {
        const { Id } = req.params
        console.log("values ye hain", Id);

        const contacts = await Contact.findOneAndDelete({"_id": Id});
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