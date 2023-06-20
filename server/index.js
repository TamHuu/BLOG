import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import posts from "./routers/posts.js";
import mongoose from "mongoose";
const app = express();
const URL =
  "mongodb+srv://Lehuutamdev2000:0789840902@cluster0.emonauc.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.port || 5000;
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use("/posts", posts);
mongoose
  .connect(URL, { useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Db");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
