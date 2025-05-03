const User = require("../../models/User.model");

const updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    console.log("Updating user with ID:", id);
    console.log("New data:", updateData);

    const updatedUser = await User.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updateUserById;
