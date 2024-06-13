import express from "express";

const router=express.Router();

// At api/posts/test
// router.get("/test", (req,res)=>{
//     console.log("Router works");
//     res.send("Yayy");
// });

export default router;

//Get : request data from a specified resource.
//Post: sends data to a server to create or update a resource.
//Put: updates the entire resource with data that is passed in the body payload.
//Delete: delete a resource. 