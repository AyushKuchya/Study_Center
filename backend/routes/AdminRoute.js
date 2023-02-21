import { Router } from "express";

const adminRouter = Router({ mergeParams: true })

adminRouter.get("/login", (req, res) => {
    res.json({ message: req.params.name })
})

export default adminRouter
