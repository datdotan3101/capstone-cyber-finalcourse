import { responseSuccess } from "../common/helpers/response.helper";
import workServices from "../services/work.service";

const workControllers = {
  congViecGet: async (req, res) => {
    const result = await workServices.congViecGet(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  congViecPost: async (req, res) => {
    const result = await workServices.congViecPost(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  congViecPagination: async (req, res) => {
    const result = await workServices.congViecPagination(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  congViecGetID: async (req, res) => {
    const result = await workServices.congViecGetID(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  congViecPutID: async (req, res) => {
    const result = await workServices.congViecPutID(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  congViecDeleteID: async (req, res) => {
    const result = await workServices.congViecDeleteID(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
};

export default workControllers;
