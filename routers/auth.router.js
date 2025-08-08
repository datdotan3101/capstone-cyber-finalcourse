import express from "express";
import authController from "../controllers/auth.controller";

const authRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserAuth:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         phone:
 *           type: string
 *         birthday:
 *           type: string
 *         gender:
 *           type: boolean
 *         role:
 *           type: string
 *         skill:
 *           type: array
 *           items:
 *             type: string
 *         certification:
 *           type: array
 *           items:
 *             type: string
 *     RegisterRequest:
 *       allOf:
 *         - $ref: '#/components/schemas/UserAuth'
 *       required:
 *         - name
 *         - email
 *         - password
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *     AuthResponse:
 *       type: object
 *       properties:
 *         accessToken:
 *           type: string
 *         refreshToken:
 *           type: string
 *         user:
 *           $ref: '#/components/schemas/UserAuth'
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Bad Request
 */
authRouter.post("/register", authController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       401:
 *         description: Unauthorized
 */
authRouter.post("/login", authController.login);

authRouter.post("/refresh-token", authController.refreshToken);

export default authRouter;
