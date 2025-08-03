import { responseSuccess } from "../common/helpers/response.helper";
import typeWorkServices from "../services/type.service";

const typeControllers = {
  typeWorkGet: async (req, res) => {
    const result = await typeWorkServices.typeWorkGet(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  typeWorkPost: async (req, res) => {
    const result = await typeWorkServices.typeWorkPost(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  typeWorkPagination: async (req, res) => {
    const result = await typeWorkServices.typeWorkPagination(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  typeWorkGetId: async (req, res) => {
    const result = await typeWorkServices.typeWorkGetId(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  typeWorkPutId: async (req, res) => {
    const result = await typeWorkServices.typeWorkPutId(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  typeWorkDeleteId: async (req, res) => {
    const result = await typeWorkServices.typeWorkDeleteId(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
};

export default typeControllers;
