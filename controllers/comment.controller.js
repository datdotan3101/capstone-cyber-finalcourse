import { responseSuccess } from "../common/helpers/response.helper";
import commentService from "../services/comment.service";

const commentController = {
  binhLuanGet: async (req, res) => {
    const result = await commentService.binhLuanGet(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  binhLuanPost: async (req, res) => {
    const result = await commentService.binhLuanPost(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  binhLuanPut: async (req, res) => {
    const result = await commentService.binhLuanPut(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  binhLuanDelete: async (req, res) => {
    const result = await commentService.binhLuanDelete(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
  binhLuanTheoCongViec: async (req, res) => {
    const result = await commentService.binhLuanTheoCongViec(req);
    const resData = responseSuccess(result);
    res.json(resData);
  },
};
export default commentController;
