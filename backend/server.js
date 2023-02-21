import express from "express";
import morgan from "morgan";
import cors from 'cors'
import * as dotenv from 'dotenv'
import { Router } from "express";
import adminRouter from "./routes/AdminRoute.js";
dotenv.config()

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan("dev"))

app.use('/', adminRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})