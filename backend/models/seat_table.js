const  mongoose  = require('mongoose');

const seatSchema = new mongoose.Schema({
    seat_no:{
        type:Number,
        required:true,
        unique:true
    },
    status:{
        type:String,
        required:true,
        default: 'vacant',
    },
    end_date:{
        type:Date,
        required:true,
        default: new Date(0)
    }
});

const seat_table = mongoose.model('seat_table',seatSchema);
module.exports = seat_table;