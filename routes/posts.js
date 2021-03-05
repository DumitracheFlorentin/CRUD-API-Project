const express = require("express");
const router = express.Router();

// Import data from DB
const Post = require("../models/postsData");

// GET ALL THE POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// GET A SPECIFIC POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ msg: "The post was not found!" });
  }
});

// SUBMIT A POST
router.post("/", (req, res) => {
  try {
    const body = req.body;

    if (!body.title || !body.author || !body.price) {
      res.status(401).json({ msg: "Please complete all the fields!" });
    } else {
      const newPost = new Post({
        title: body.title,
        author: body.author,
        price: body.price,
        description: body.description,
      });
      newPost
        .save()
        .then(() => {
          res.status(200).json({ msg: "The post was created!" });
        })
        .catch((err) => {
          res.status(400).json({ msg: error });
        });
    }
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

// UPDATE A SPECIFIC POST
router.patch("/:id", async (req, res) => {
  try {
    await Post.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title ? req.body.title : title,
          price: req.body.price ? req.body.price : price,
          author: req.body.author ? req.body.author : author,
        },
      }
    );
    res.status(201).json({ message: "The post was updated!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE A SPECIFIC POST
router.delete("/:id", async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "The post was deleted!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
