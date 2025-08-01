import { BadrequestException } from "../common/helpers/exception.helper";
import prisma from "../common/Prisma/init.prisma";
import bcrypt from "bcrypt";

const authService = {
  register: async (req) => {
    const { name, email, pass_word } = req.body;

    const userExist = await prisma.nguoiDung.findUnique({
      where: { email: email },
    });

    if (userExist) {
      throw new BadrequestException("Tai khoan da ton tai");
    }

    const passHash = bcrypt.hashSync(pass_word, 10);

    const newUser = await prisma.nguoiDung.create({
      data: {
        name: name,
        email: email,
        pass_word: passHash,
      },
    });

    delete newUser.pass_word;

    return newUser;
  },
  login: async (req) => {
    const { email, pass_word } = req.body;

    const userExist = await prisma.nguoiDung.findUnique({
      where: { email: email },
    });
    console.log("login", userExist);

    if (!userExist) {
      throw new BadrequestException("Người dùng chưa có tài khoản");
    }

    const isPassword = bcrypt.compareSync(pass_word, userExist.pass_word);
    if (!isPassword) {
      throw new BadrequestException("Mật khẩu không đúng");
    }

    delete userExist.pass_word;
    
    return "login";
  },
};

export default authService;
