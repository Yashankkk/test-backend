const User = require("../../models/User.model");

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    console.log("Updating user ID:", id);
    console.log("New data:", updateData);

    // Validate ObjectId format
    if (!id || id.length !== 24) {
      return res.status(400).json({ error: "Invalid user ID format" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json({ msg: "User updated successfully", updatedUser });

  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = updateUserById;
