const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("dotenv").config();
const router = require("./routes/postRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Successfully connected to the server.");
});

// set up routes

// set up mongoose

console.log("Connecting to MongoDB");
mongoose.connect(
  keys.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) return console.log(err);
    console.log("MongoDB connection established");
  }
);
