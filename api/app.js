import express from "express";
import cookieParser from "cookie-parser"
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js"

const app=express();

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, ()=>{
    console.log("Server is running");
});


// Endpoint Added so that at localhost:8800/api/test we get response
// app.use("/api/test", (req,res)=>{
//     res.send("Hello")
// })

// app.use("/api/auth/login", (req,res)=>{
//     res.send("Hello")
// })

// app.use("/api/auth/logout", (req,res)=>{
//     res.send("Hello")
// })

// //Get
// app.use("/api/posts", (req,res)=>{
//     res.send("Hello")
// })

// //Post
// app.use("/api/posts", (req,res)=>{
//     res.send("Hello")
// })

// app.use("/api/posts/12232", (req,res)=>{
//     res.send("Hello")
// })
//We will make a seprate file for routing