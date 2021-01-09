const router = require("express").Router();
const Post = require("../models/postModel");

// router.get("/test", (req, res) => {
//   res.send("It's working");
// });

// make a post request to /
router.post("/", async (req, res) => {
  // retrieve the data from the request
  const { title, createdAt, tags, html } = req.body;
  // construct the post model
  const newPost = new Post({
    title,
    createdAt,
    tags,
    html,
  });
  // save post model
  try {
    const savePost = await newPost.save();
    res.json(savePost);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

module.exports = router;
