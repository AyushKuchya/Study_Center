import { Router } from "express";

const adminRouter = Router({ mergeParams: true })

adminRouter.post("/login", (req, res, next) => {

    try {
        const name = req.body.username
        const password = req.body.password

        if (name === 'admin' && password === 'admin') {
            res.status(201).json({ message: "Login Successful" })
        }
        else {
            throw new Error("Invalid credentials.")
        }
    }
    catch (e) {
        console.log("e")
        next(e)
    }
})

export default adminRouter
