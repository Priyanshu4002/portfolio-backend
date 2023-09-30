import mongoose ,{ Schema } from "mongoose";

const userSchema= new Schema ({
    Name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    Messagedate:{
        type:Date,
        default:Date.now,
    },
})

export const Messenger = mongoose.model("Messenger",userSchema);