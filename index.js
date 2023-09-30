import express  from "express";
import userRoute from './routes/user.js'
import connectdb from './database/user.js';
import { config } from "dotenv";
import cors from "cors";

const app = express();

config({
    path:'./database/config.env'
});

connectdb();

app.use(express.json());

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));

app.use("/api/v1/user",userRoute);

app.get("/",(req, res)=>{
    res.send("hello");
})

app.listen(process.env.Port, ()=>{
    console.log("server is working on port 5000");
})