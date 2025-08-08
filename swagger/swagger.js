import path from "path";
import { fileURLToPath } from "url";
import swaggerJSDoc from "swagger-jsdoc";
import { schemas } from "./schemas.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: { title: "Capstone Cyber FinalCourse API", version: "1.0.0" },
    servers: [{ url: "http://localhost:3069", description: "Local dev" }],
    components: {
      securitySchemes: {
        BearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
      schemas,
    },
  },
  apis: [path.join(__dirname, "../routers/*.js")], // ✅ quét đúng thư mục routers
});
