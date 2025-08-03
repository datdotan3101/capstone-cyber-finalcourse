import { responseSuccess } from "../common/helpers/response.helper";
import authService from "../services/auth.service";

const authController = {
  register: async (req, res) => {
    const result = await authService.register(req);
    const resResult = responseSuccess(result);
    res.json(resResult);
  },
  login: async (req, res) => {
    const result = await authService.login(req);
    const resResult = responseSuccess(result);
    res.json(resResult);
  },
  refreshToken: async (req, res) => {
    const result = await authService.refreshToken(req);
    const resResult = responseSuccess(result);
    res.json(resResult);
  },
};

export default authController;
