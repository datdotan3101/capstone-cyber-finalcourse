import { responseSuccess } from "../common/helpers/response.helper";
import usersServices from "../services/user.service";

const usersControllers = {
  usersGet: async (req, res) => {
    const result = await usersServices.usersGet(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  usersPost: async (req, res) => {
    const result = await usersServices.usersPost(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  usersDelete: async (req, res) => {
    const result = await usersServices.usersDelete(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  usersPagination: async (req, res) => {
    const result = await usersServices.usersPagination(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  usersGetId: async (req, res) => {
    const result = await usersServices.usersGetId(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  usersPutId: async (req, res) => {
    const result = await usersServices.usersPutId(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  usersGetName: async (req, res) => {
    const result = await usersServices.usersGetName(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
};

export default usersControllers;
