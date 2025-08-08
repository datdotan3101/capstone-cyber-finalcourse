import { responseSuccess } from "../common/helpers/response.helper";
import rentServices from "../services/rent.service";

const rentControllers = {
  rentGet: async (req, res) => {
    const result = await rentServices.rentGet(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  rentPost: async (req, res) => {
    const result = await rentServices.rentPost(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  rentPagination: async (req, res) => {
    const result = await rentServices.rentPagination(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  rentGetId: async (req, res) => {
    const result = await rentServices.rentGetId(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  rentPutId: async (req, res) => {
    const result = await rentServices.rentPutId(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  rentDeleteId: async (req, res) => {
    const result = await rentServices.rentDeleteId(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  listRented: async (req, res) => {
    const result = await rentServices.listRented(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  finishWork: async (req, res) => {
    const result = await rentServices.finishWork(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  finishWork: async (req, res) => {
    const result = await rentServices.finishWork(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
};

export default rentControllers;
