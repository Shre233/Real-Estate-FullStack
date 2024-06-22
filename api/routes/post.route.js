import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.controller.js";
const router = express.Router();

// At api/posts/test
// router.get("/test", (req,res)=>{
//     console.log("Router works");
//     res.send("Yayy");
// });

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verifyToken, addPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);

export default router;

//Get : request data from a specified resource.
//Post: sends data to a server to create or update a resource.
//Put: updates the entire resource with data that is passed in the body payload.
//Delete: delete a resource.
