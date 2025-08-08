import express from "express";
import rooterRouter from "./routers/root.router";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger/swagger.js";

const app = express();

app.use(express.json());

dotenv.config();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(rooterRouter);

app.listen(3069, () => {
  console.log(`Server running on port http://localhost:3069`);
});
