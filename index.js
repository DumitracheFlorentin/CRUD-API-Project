const express = require("express");
const mongoose = require("mongoose");

// Import dotenv
require("dotenv").config();

// Init server
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server's routes
app.use("/api/posts", require("./routes/posts"));

// Connect to DB
mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(err.message);
  });

// Listen the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}!`);
});
