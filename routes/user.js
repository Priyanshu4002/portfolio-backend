import express from "express";
import { Messenger } from "../model/user.js";

const router= express.Router();

router.get("/name",(req, res)=>{
    res.send("priyanshu");
})

router.post("/contact",async(req,res)=>{
    try {
        const {Name, email, subject, message}= req.body;

    await Messenger.create({
        Name,
        email,
        subject,
        message,
    });

    res.status(201).json({
        success:true,
        message:"Message send successfully"
    })
    } catch (error) {
        console.log(error);
    }
})

export default router;