import mongoose from "mongoose";
const userSchema= new mongoose.Schema ({
    firstName:{
        type:String,
        required:true
       } ,
       email:{
        type:String,
        required:true
       },
       password:{
        type:String,
        required:true
       }
})
const Users= mongoose.model('pcheck2',userSchema);
export default Users