import express from "express";
import usersControllers from "../controllers/users.controller";

const usersRouters = express.Router();

usersRouters.get("/users", usersControllers.usersGet);
usersRouters.post("/users", usersControllers.usersPost);
usersRouters.delete("/users", usersControllers.usersDelete);
usersRouters.get("/users-pagination", usersControllers.usersPagination);
usersRouters.get("/users/:id", usersControllers.usersGetId);
usersRouters.put("/users/:id", usersControllers.usersPutId);
usersRouters.get("/users/searchforname/:name", usersControllers.usersGetName);

export default usersRouters;
