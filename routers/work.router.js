import express from "express";
import workControllers from "../controllers/work.controller.js";

const workRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: CongViec
 */

/**
 * @swagger
 * /api/cong-viec:
 *   get:
 *     tags: [CongViec]
 *     responses:
 *       200:
 *         description: OK
 */
workRouter.get("/cong-viec", workControllers.congViecGet);

/**
 * @swagger
 * /api/cong-viec:
 *   post:
 *     tags: [CongViec]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ten_cong_viec:
 *                 type: string
 *                 example: "Thiết kế website"
 *               gia_tien:
 *                 type: integer
 *                 example: 5000000
 *               mo_ta:
 *                 type: string
 *                 example: "Thiết kế trang web bán hàng"
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
workRouter.post("/cong-viec", workControllers.congViecPost);

/**
 * @swagger
 * /api/cong-viec/phan-trang-tim-kiem:
 *   get:
 *     tags: [CongViec]
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
workRouter.get(
  "/cong-viec/phan-trang-tim-kiem",
  workControllers.congViecPagination
);

/**
 * @swagger
 * /api/cong-viec/{id}:
 *   get:
 *     tags: [CongViec]
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
workRouter.get("/cong-viec/:id", workControllers.congViecGetID);

/**
 * @swagger
 * /api/cong-viec/{id}:
 *   put:
 *     tags: [CongViec]
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
 *               ten_cong_viec:
 *                 type: string
 *                 example: "Thiết kế website nâng cao"
 *               gia_tien:
 *                 type: integer
 *                 example: 8000000
 *     responses:
 *       200:
 *         description: OK
 */
workRouter.put("/cong-viec/:id", workControllers.congViecPutID);

/**
 * @swagger
 * /api/cong-viec/{id}:
 *   delete:
 *     tags: [CongViec]
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
workRouter.delete("/cong-viec/:id", workControllers.congViecDeleteID);

/**
 * @swagger
 * /api/cong-viec/lay-menu-loai-cong-viec:
 *   get:
 *     tags: [CongViec]
 *     responses:
 *       200:
 *         description: OK
 */
workRouter.get(
  "/cong-viec/lay-menu-loai-cong-viec",
  workControllers.congViecGetMenu
);

export default workRouter;
