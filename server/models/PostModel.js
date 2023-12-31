import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: "Anonymous",
    },
    attachment: String,
    likeCount: {
      type: Number,
      default: 0,
    },
    // Nếu để timestamps bằng true nó sẽ tự động thêm createAt hoặc updateAt
  },
  { timestamps: true }
);

export const PostModel = mongoose.model("Post", schema);
