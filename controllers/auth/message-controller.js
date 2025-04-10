const contact = require ('../../models/Contact')

const getAllContacts = async(req, res, next) => {
    try{
        const contactvalues = await(req.body);
        console.log('values ye hain', contactvalues);

        const contacts = await contact.find();
        console.log(contacts);
        if (!contacts){
            return res.status(404).json({ message: "No contacts found"});
        }
        return res.status(200).json(contacts);
    } catch(error){
        console.error("error" , error);
        res.status(500).json({ error: "Internal Server Error" });
        next(error);
    }
};

module.exports = getAllContacts;