import express from "express";
import authRouter from "./auth.router";

const rooterRouter = express.Router();

rooterRouter.use("/auth", authRouter);

export default rooterRouter;
