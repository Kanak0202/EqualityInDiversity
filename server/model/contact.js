import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    query:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
});

const contact = mongoose.model('contact', contactSchema);

export default contact;