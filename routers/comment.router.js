import express from "express";
import commentController from "../controllers/comment.controller";

const commentRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: BinhLuan
 */

/**
 * @swagger
 * /api/binh-luan:
 *   get:
 *     tags: [BinhLuan]
 *     responses:
 *       200:
 *         description: OK
 */
commentRouter.get("/binh-luan", commentController.binhLuanGet);

/**
 * @swagger
 * /api/binh-luan:
 *   post:
 *     tags: [BinhLuan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma_cong_viec:
 *                 type: integer
 *                 example: 12
 *               noi_dung:
 *                 type: string
 *                 example: "Dịch vụ tốt"
 *               sao_binh_luan:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       201:
 */
commentRouter.post("/binh-luan", commentController.binhLuanPost);

/**
 * @swagger
 * /api/binh-luan/{id}:
 *   put:
 *     tags: [BinhLuan]
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
 *               noi_dung:
 *                 type: string
 *                 example: "Chỉnh sửa bình luận"
 *               sao_binh_luan:
 *                 type: integer
 *                 example: 4
 *     responses:
 *       200:
 *         description: OK
 */
commentRouter.put("/binh-luan/:id", commentController.binhLuanPut);

/**
 * @swagger
 * /api/binh-luan/{id}:
 *   delete:
 *     tags: [BinhLuan]
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
commentRouter.delete("/binh-luan/:id", commentController.binhLuanDelete);

/**
 * @swagger
 * /api/binh-luan/lay-binh-luan-theo-cong-viec/{id}:
 *   get:
 *     tags: [BinhLuan]
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
commentRouter.get(
  "/binh-luan/lay-binh-luan-theo-cong-viec/:id",
  commentController.binhLuanTheoCongViec
);

export default commentRouter;
