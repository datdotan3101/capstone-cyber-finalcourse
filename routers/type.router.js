import express from "express";
import typeControllers from "../controllers/type.controller";

const typeRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: LoaiCongViec
 */

/**
 * @swagger
 * /api/loai-cong-viec:
 *   get:
 *     tags: [LoaiCongViec]
 *     responses:
 *       200:
 *         description: OK
 */
typeRouter.get("/loai-cong-viec", typeControllers.typeWorkGet);

/**
 * @swagger
 * /api/loai-cong-viec:
 *   post:
 *     tags: [LoaiCongViec]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ten_loai_cong_viec:
 *                 type: string
 *                 example: "Thiết kế đồ họa"
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
typeRouter.post("/loai-cong-viec", typeControllers.typeWorkPost);

/**
 * @swagger
 * /api/loai-cong-viec/phan-trang-tim-kiem:
 *   get:
 *     tags: [LoaiCongViec]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
typeRouter.get(
  "/loai-cong-viec/phan-trang-tim-kiem",
  typeControllers.typeWorkPagination
);

/**
 * @swagger
 * /api/loai-cong-viec/{id}:
 *   get:
 *     tags: [LoaiCongViec]
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
typeRouter.get("/loai-cong-viec/:id", typeControllers.typeWorkGetId);

/**
 * @swagger
 * /api/loai-cong-viec/{id}:
 *   put:
 *     tags: [LoaiCongViec]
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
 *               ten_loai_cong_viec:
 *                 type: string
 *                 example: "Thiết kế đồ họa nâng cao"
 *     responses:
 *       200:
 *         description: OK
 */
typeRouter.put("/loai-cong-viec/:id", typeControllers.typeWorkPutId);

/**
 * @swagger
 * /api/loai-cong-viec/{id}:
 *   delete:
 *     tags: [LoaiCongViec]
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
typeRouter.delete("/loai-cong-viec/:id", typeControllers.typeWorkDeleteId);

export default typeRouter;
