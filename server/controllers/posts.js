import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    console.log("posts", posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createPosts = async (req, res) => {
  try {
    const newPost = req.body;
    const post = new PostModel(newPost);
    await post.save();
    console.log("posts", post);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updatePosts = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await PostModel.findOneAndUpdate({
      // findOneAndUpdate la method return ve 1 object du lieu cu
      _id: updatePost._id,
      updatePost,
      new: true,
    });
    post.save();
    console.log("posts", post);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
