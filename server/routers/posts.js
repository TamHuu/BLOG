import express from "express";
import { createPosts, getPosts, updatePosts } from "../controllers/posts.js";
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.put("/update", updatePosts);
export default router;
