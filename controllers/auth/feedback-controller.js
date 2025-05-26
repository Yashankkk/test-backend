const Review = require("../../models/Review.model")

const getAllReviews = async(req, res, next) => {
    try {
        const reviewvalues = await(req.body);
        console.log("values ye hain", reviewvalues);

        const reviews = await Review.find();
        console.log(reviews);
        if(!reviews || reviews.length === 0) {
            return res.status(404).json({ message: "No reviews found" });
        }
        return res.status(200).json(users);
    } catch(error){
        console.error("error",error);
        res.status(500).json ({ error: "Internal Server Error"});
        next(error);
    }
};

module.exports = getAllReviews;