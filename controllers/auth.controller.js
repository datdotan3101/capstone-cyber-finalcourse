import { responseSuccess } from "../common/helpers/response.helper";
import authService from "../services/auth.service";

const authController = {
  hello: (req, res) => {
    const result = authService.hello(req);
    const resResult = responseSuccess(result);
    res.send(resResult);
  },
};

export default authController;
