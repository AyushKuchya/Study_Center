import express from "express";
import morgan from "morgan";
import cors from 'cors'
import * as dotenv from 'dotenv'
import { Router } from "express";
import adminRouter from "./routes/AdminRoute.js";
import mongoose from "mongoose";
dotenv.config()

const app = express()
mongoose.connect("mongodb://localhost:27017/Study_Center", { useNewUrlParser: true })
    .then(() => console.log("Connected to DB"))
    .catch(console.error)

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan("dev"))

app.use('/', adminRouter)



app.use((err, req, res, next) => {
    console.error(err)
    res.status(401).json({ message: "Error occured" })
})
app.listen(process.env.PORT, () => {

    console.log(`Server running on ${process.env.PORT}`)
})