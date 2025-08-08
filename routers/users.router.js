import express from "express";
import usersControllers from "../controllers/users.controller";

const usersRouters = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: OK
 */
usersRouters.get("/users", usersControllers.usersGet);

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Nguyễn Văn A"
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
usersRouters.post("/users", usersControllers.usersPost);

/**
 * @swagger
 * /api/users:
 *   delete:
 *     tags: [Users]
 *     responses:
 *       204:
 *         description: Đã xoá
 */
usersRouters.delete("/users", usersControllers.usersDelete);

/**
 * @swagger
 * /api/users-pagination:
 *   get:
 *     tags: [Users]
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
usersRouters.get("/users-pagination", usersControllers.usersPagination);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags: [Users]
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
usersRouters.get("/users/:id", usersControllers.usersGetId);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     tags: [Users]
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
 *               name:
 *                 type: string
 *                 example: "Nguyễn Văn B"
 *               email:
 *                 type: string
 *                 example: "newemail@example.com"
 *     responses:
 *       200:
 *         description: OK
 */
usersRouters.put("/users/:id", usersControllers.usersPutId);

/**
 * @swagger
 * /api/users/searchforname/{name}:
 *   get:
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
usersRouters.get("/users/searchforname/:name", usersControllers.usersGetName);

export default usersRouters;
