import express from "express";
import workControllers from "../controllers/work.controller.js";

const workRouter = express.Router();

workRouter.get("/cong-viec", workControllers.congViecGet);
workRouter.post("/cong-viec", workControllers.congViecPost);
workRouter.get(
  "/cong-viec/phan-trang-tim-kiem",
  workControllers.congViecPagination
);
workRouter.get("/cong-viec/:id", workControllers.congViecGetID);
workRouter.put("/cong-viec/:id", workControllers.congViecPutID);
workRouter.delete("/cong-viec/:id", workControllers.congViecDeleteID);

export default workRouter;
