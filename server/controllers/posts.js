import { PostModel } from "../models/PostModel.js";

// PostModel.find() để tìm kiếm tất cả các bài viết trong
//  cơ sở dữ liệu và trả về một mảng các bài viết.
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
    const post = await PostModel.findOneAndUpdate(
      { _id: updatePost._id }, // Điều kiện tìm kiếm
      updatePost, // Dữ liệu cần cập nhật
      { new: true } // Tùy chọn để trả về đối tượng đã được cập nhật
    );

    console.log("post", post);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
// Điều kiện tìm kiếm trong findOneAndUpdate được đặt trong một object { _id: updatePost._id }.
// Dữ liệu cần cập nhật được truyền vào updatePost.
// Tùy chọn { new: true } được sử dụng để trả về đối tượng đã được cập nhật.
// Loại bỏ lệnh post.save() vì findOneAndUpdate đã cập nhật đối tượng trực tiếp trong cơ sở dữ liệu.
