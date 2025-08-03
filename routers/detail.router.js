import express from "express";
import detailWorkController from "../controllers/detailWork.controller";

const detailWorkRouter = express.Router();

detailWorkRouter.get(
  "/chi-tiet-loai-cong-viec",
  detailWorkController.detailWorkGet
);
detailWorkRouter.post(
  "/chi-tiet-loai-cong-viec",
  detailWorkController.detailWorkPost
);
detailWorkRouter.get(
  "/chi-tiet-loai-cong-viec/phan-trang-tim-kiem",
  detailWorkController.detailWorPagination
);
detailWorkRouter.get(
  "/chi-tiet-loai-cong-viec/:id",
  detailWorkController.detailWorkGetID
);
detailWorkRouter.put(
  "/chi-tiet-loai-cong-viec/:id",
  detailWorkController.detailWorkPutID
);
detailWorkRouter.delete(
  "/chi-tiet-loai-cong-viec/:id",
  detailWorkController.detailWorkDeleteID
);

export default detailWorkRouter;
