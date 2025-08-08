import express from "express";
import rentControllers from "../controllers/rent.controller";

const rentRouters = express.Router();

/**
 * @swagger
 * tags:
 *   name: ThueCongViec
 */

/**
 * @swagger
 * /api/thue-cong-viec:
 *   get:
 *     tags: [ThueCongViec]
 *     responses:
 *       200:
 *         description: OK
 */
rentRouters.get("/thue-cong-viec", rentControllers.rentGet);

/**
 * @swagger
 * /api/thue-cong-viec:
 *   post:
 *     tags: [ThueCongViec]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma_cong_viec:
 *                 type: integer
 *                 example: 5
 *               ma_nguoi_thue:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
rentRouters.post("/thue-cong-viec", rentControllers.rentPost);

/**
 * @swagger
 * /api/thue-cong-viec-pagination:
 *   get:
 *     tags: [ThueCongViec]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 */
rentRouters.get("/thue-cong-viec-pagination", rentControllers.rentPagination);

/**
 * @swagger
 * /api/thue-cong-viec/{id}:
 *   get:
 *     tags: [ThueCongViec]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 */
rentRouters.get("/thue-cong-viec/:id", rentControllers.rentGetId);

/**
 * @swagger
 * /api/thue-cong-viec/{id}:
 *   put:
 *     tags: [ThueCongViec]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hoan_thanh:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: OK
 */
rentRouters.put("/thue-cong-viec/:id", rentControllers.rentPutId);

/**
 * @swagger
 * /api/thue-cong-viec/{id}:
 *   delete:
 *     tags: [ThueCongViec]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Đã xoá
 */
rentRouters.delete("/thue-cong-viec/:id", rentControllers.rentDeleteId);

/**
 * @swagger
 * /api/thue-cong-viec/danh-sach-da-thue:
 *   get:
 *     tags: [ThueCongViec]
 *     responses:
 *       200:
 *         description: OK
 */
rentRouters.get(
  "/thue-cong-viec/danh-sach-da-thue",
  rentControllers.listRented
);

/**
 * @swagger
 * /api/thue-cong-viec/hoan-thanh-cong-viec/{id}:
 *   post:
 *     tags: [ThueCongViec]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cập nhật trạng thái hoàn thành
 */
rentRouters.post(
  "/thue-cong-viec/hoan-thanh-cong-viec/:id",
  rentControllers.finishWork
);



export default rentRouters;
