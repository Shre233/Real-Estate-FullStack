import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router=express.Router();

// At api/auth/..
// router.post("/register", (req,res)=>{
//     console.log("Router works");
//     res.send("Yayy");
// });
// we made controller for function on each route

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

export default router;
