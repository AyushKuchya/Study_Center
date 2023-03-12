const seat_table = require('D:/SC_Backend/models/seat_table.js')
const user_table =require('../models/user_data.js')

exports.getSeat = async (req,res)=>{
    try {
        const getSeatNo = await seat_table.find({ end_date :{$lt: new Date()}},{_id:0})
        if(getSeatNo.length>0){
            res.status(201).json({
                status:'sucess',
                result:getSeatNo.length,
                data:getSeatNo      
            })
        }
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message:error.errmsg
        })
    }
}

exports.addSeat = async (req, res) => {
    try {
        const newSeat = await seat_table.create({
            seat_no: req.body.seat_no
        })
        await newSeat.save()
        res.status(201).json({
            status:"success",
            created:true
        })
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

exports.postUserDetails = async (req,res)=>{
    try {
        const newUser = await user_table.create(req.body);
        const updateSeat = await seat_table.findOneAndUpdate({
            seat_no : req.body.seat_no
        }, {
            $set:{end_date:req.body.end_date , status:"filled"}
        }, {new : true});
        await updateSeat.save()
        res.status(201).json({
            status:'success',
            data: newUser,
            seat:updateSeat
        })
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message:error.message
        })
    }
    
}

exports.getActiveUsers = async (req,res)=>{
    try {
        const activeUsers = await user_table.find({ end_date :{$gte: new Date()}},{_id:0}).sort({seat_no:1});
        if(activeUsers.length>0){
            res.status(201).json({
                status:"success",
                data:activeUsers
            })
        }
        else{
            res.status(201).json({
                message:"no data"
            })
        }
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message:error.message
        })
    }
}

exports.getInactiveUsers = async(req,res)=>{
    try {
        const inactiveUsers = await user_table.find({end_date:{$lt:new Date()} , status:"pending"} ,{_id:0});
        if(inactiveUsers.length>0){
            res.status(201).json({
                status:"success",
                data:inactiveUsers
            })
        }
        else{
            res.status(201).json({
                message:"no data"
            })
        }
        
    } catch (error) {
        res.status(201).json({
            status:"success",
            data:activeUsers
        })        
    }
   
}
