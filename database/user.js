import mongoose from "mongoose";

const connectdb=()=>{
mongoose.connect(process.env.MONGO_URL,{
    dbName:"ContactInfo",
}).then(()=>{
    console.log("Database connected successfully")
}).catch((e)=>console.log(e));
}

export default connectdb;