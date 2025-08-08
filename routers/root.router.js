import express from "express";
import authRouter from "./auth.router";
import commentRouter from "./comment.router";
import detailWorkRouter from "./detail.router";
import workRouter from "./work.router";
import typeRouter from "./type.router";
import usersRouters from "./users.router";
import rentRouters from "./rent.router";

const rooterRouter = express.Router();

rooterRouter.use("/auth", authRouter);
rooterRouter.use("/api", commentRouter);
rooterRouter.use("/api", detailWorkRouter);
rooterRouter.use("/api", workRouter);
rooterRouter.use("/api", typeRouter);
rooterRouter.use("/api", usersRouters);
rooterRouter.use("/api", rentRouters);

export default rooterRouter;

