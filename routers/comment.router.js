import express from "express";
import commentController from "../controllers/comment.controller";

const commentRouter = express.Router();

commentRouter.get("/binh-luan", commentController.binhLuanGet);
commentRouter.post("/binh-luan", commentController.binhLuanPost);
commentRouter.put("/binh-luan/:id", commentController.binhLuanPut);
commentRouter.delete("/binh-luan/:id", commentController.binhLuanDelete);
commentRouter.get(
  "/binh-luan/lay-binh-luan-theo-cong-viec/:id",
  commentController.binhLuanTheoCongViec
);

export default commentRouter;
