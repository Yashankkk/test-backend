const Contact = require("../../models/Contact");

const contact = async (req, res, next) => {
    try {
        const contactvalues = await (req.body);
        console.log("values aa gu", contactvalues);
        const {fullName, email, phone, message } = req.body;

        const contactVerification = await Contact.findOne({
            phone,
        });
        if(contactVerification){
            return res.status(400).json({
                message:"Phone number Exist",
                success:400
            })
        }
       console.log(contactVerification); 
        
        if (!fullName || !email || !phone || !message ) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const contact = new Contact({ fullName, email, phone, message});
        console.log("contach model",contact)
        await contact.save();

        res.status(201).json({ message: "Message sent successfully!" });
        
    } catch(error) {
        console.error("Error submitting contact form", error);
        res.status(500).json({ error: "Internal Server Error" });
        next(error);
    }
};

module.exports = contact;