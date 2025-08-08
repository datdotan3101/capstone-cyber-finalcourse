import express from "express";
import detailWorkController from "../controllers/detailWork.controller";

const detailWorkRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: ChiTietLoaiCongViec
 */

/**
 * @swagger
 * /api/chi-tiet-loai-cong-viec:
 *   get:
 *     tags: [ChiTietLoaiCongViec]
 *     responses:
 *       200:
 *         description: OK
 */
detailWorkRouter.get(
  "/chi-tiet-loai-cong-viec",
  detailWorkController.detailWorkGet
);

/**
 * @swagger
 * /api/chi-tiet-loai-cong-viec:
 *   post:
 *     tags: [ChiTietLoaiCongViec]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma_loai_cong_viec:
 *                 type: integer
 *                 example: 1
 *               ten_chi_tiet:
 *                 type: string
 *                 example: "Lập trình Web Backend"
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
detailWorkRouter.post(
  "/chi-tiet-loai-cong-viec",
  detailWorkController.detailWorkPost
);

/**
 * @swagger
 * /api/chi-tiet-loai-cong-viec/phan-trang-tim-kiem:
 *   get:
 *     tags: [ChiTietLoaiCongViec]
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
detailWorkRouter.get(
  "/chi-tiet-loai-cong-viec/phan-trang-tim-kiem",
  detailWorkController.detailWorPagination
);

/**
 * @swagger
 * /api/chi-tiet-loai-cong-viec/{id}:
 *   get:
 *     tags: [ChiTietLoaiCongViec]
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
detailWorkRouter.get(
  "/chi-tiet-loai-cong-viec/:id",
  detailWorkController.detailWorkGetID
);

/**
 * @swagger
 * /api/chi-tiet-loai-cong-viec/{id}:
 *   put:
 *     tags: [ChiTietLoaiCongViec]
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
 *               ten_chi_tiet:
 *                 type: string
 *                 example: "Lập trình Web Backend nâng cao"
 *     responses:
 *       200:
 *         description: OK
 */
detailWorkRouter.put(
  "/chi-tiet-loai-cong-viec/:id",
  detailWorkController.detailWorkPutID
);

/**
 * @swagger
 * /api/chi-tiet-loai-cong-viec/{id}:
 *   delete:
 *     tags: [ChiTietLoaiCongViec]
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
detailWorkRouter.delete(
  "/chi-tiet-loai-cong-viec/:id",
  detailWorkController.detailWorkDeleteID
);

export default detailWorkRouter;
