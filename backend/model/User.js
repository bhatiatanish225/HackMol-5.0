import mongoose, { trusted } from 'mongoose';

const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,
        required:true},
    
    email: {

    }
    },
);
