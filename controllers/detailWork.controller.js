import { responseSuccess } from "../common/helpers/response.helper";
import detailWorkServices from "../services/detailWork.service";

const detailWorkController = {
  detailWorkGet: async (req, res) => {
    const result = await detailWorkServices.detailWorkGet(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  detailWorkPost: async (req, res) => {
    const result = await detailWorkServices.detailWorkPost(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  detailWorPagination: async (req, res) => {
    const result = await detailWorkServices.detailWorPagination(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  detailWorkGetID: async (req, res) => {
    const result = await detailWorkServices.detailWorkGetID(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  detailWorkPutID: async (req, res) => {
    const result = await detailWorkServices.detailWorkPutID(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  detailWorkDeleteID: async (req, res) => {
    const result = await detailWorkServices.detailWorkDeleteID(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
};

export default detailWorkController;
