import express from "express";
import authRouter from "./auth.router";
import commentRouter from "./comment.router";
import detailWorkRouter from "./detail.router";
import workRouter from "./work.router";

const rooterRouter = express.Router();

rooterRouter.use("/auth", authRouter);
rooterRouter.use("/api", commentRouter);
rooterRouter.use("/api", detailWorkRouter);
rooterRouter.use("/api", workRouter);

export default rooterRouter;
