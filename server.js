import express from "express";
import rooterRouter from "./routers/root.router";

const app = express();

app.use(express.json());

app.use(rooterRouter);

app.listen(3069, () => {
  console.log(`Server running on port http://localhost:3069`);
});
