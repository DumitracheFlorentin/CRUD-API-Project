const mongoose = require("mongoose");

const postsSchema = mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("postsData", postsSchema);
