const  mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    seat_no:{
        type:Number,
        required:true
    },
    aadhar:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    fee_structure:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    mobile_no:{
        type:Number,
        required:true
    },
    start_date:{
        type:Date,
        required:true
    },
    end_date:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
});
const user_table = mongoose.model('user_table',userSchema);
module.exports = user_table;