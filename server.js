// mongo connection (First step)
const mongoose = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");
const routes = require("./routes");

require("dotenv").config();


const express = require("express");
const backend = express();
 backend.use('/uploads', express.static('uploads'));
backend.use(express.json())

// CORS (Second step) 2
backend.use(cors({
    origin: ["https://renta-car-pink.vercel.app"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}));
backend.get("/", (req, res) => {
  res.send("Backend is running!");
});

// routing (third step) 3
backend.use(routes);



// mongoose connect 1
mongoose.connect("mongodb+srv://yashank:Yashankk@yashank.ffhyi.mongodb.net/")
.then(() =>
  console.log(`${chalk.green("✓")} ${chalk.blue("MongoDB Connected!")}`)
)
.then(() => {
  const PORT = 3000;
  backend.listen(PORT, () => {
    console.log(
      `${chalk.green("✓")} ${chalk.blue(
        "Server Started on port"
      )} ${chalk.bgMagenta.white(PORT)}`
    );
  });
})
.catch((err) => console.log(err));
