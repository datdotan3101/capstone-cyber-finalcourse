import express from "express";
import typeControllers from "../controllers/type.controller";

const typeRouter = express.Router();

typeRouter.get("/loai-cong-viec", typeControllers.typeWorkGet);
typeRouter.post("/loai-cong-viec", typeControllers.typeWorkPost);
typeRouter.get(
  "/loai-cong-viec/phan-trang-tim-kiem",
  typeControllers.typeWorkPagination
);
typeRouter.get("/loai-cong-viec/:id", typeControllers.typeWorkGetId);
typeRouter.put("/loai-cong-viec/:id", typeControllers.typeWorkPutId);
typeRouter.delete("/loai-cong-viec/:id", typeControllers.typeWorkDeleteId);

export default typeRouter;
