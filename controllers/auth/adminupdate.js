const User = require("../../models/User.model");

const updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    console.log("Updating user ID:", id);
    console.log("New data:", updateData);

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true } // `new: true` returns updated doc
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
    next(error);
  }
};

module.exports = updateUserById;
