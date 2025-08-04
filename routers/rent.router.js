import express from "express";
import rentControllers from "../controllers/rent.controller";

const rentRouters = express.Router();

rentRouters.get("/thue-cong-viec", rentControllers.rentGet);
rentRouters.post("/thue-cong-viec", rentControllers.rentPost);
rentRouters.get("/thue-cong-viec-pagination", rentControllers.rentPagination);
rentRouters.get("/thue-cong-viec/:id", rentControllers.rentGetId);
rentRouters.put("/thue-cong-viec/:id", rentControllers.rentPutId);
rentRouters.delete("/thue-cong-viec/:id", rentControllers.rentDeleteId);
rentRouters.get(
  "/thue-cong-viec/danh-sach-da-thue",
  rentControllers.listRented
);
rentRouters.post(
  "/thue-cong-viec/hoan-thanh-cong-viec/:id",
  rentControllers.finishWork
);

export default rentRouters;
