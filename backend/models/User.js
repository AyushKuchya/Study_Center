import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    adhaar: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    seatNumber: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', userSchema)

export default User
