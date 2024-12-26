require("dotenv").config();

exports.handleQuestions = async (req, res) => {
  try {
    const { messages } = req.body;
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
