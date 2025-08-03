import { BadrequestException } from "../common/helpers/exception.helper";
import prisma from "../common/Prisma/init.prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

    const payload = {
      id: userExist.id,
      email: userExist.email,
      role: userExist.role,
    };

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || "10s",
    });

    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || "20s",
    });

    delete userExist.pass_word;

    return {
      accessToken,
      refreshToken,
      user: {
        id: userExist.id,
        name: userExist.name,
        email: userExist.email,
      },
    };
  },
  refreshToken: (req) => {
    const { accessToken, refreshToken } = req.body;

    const decodeRefreshToken = tokenService.verifyRefreshToken(refreshToken);
    const decodeAccessToken = tokenService.verifyAccessToken(accessToken, true);

    if (decodeRefreshToken.userId !== decodeAccessToken.userId) {
      throw new UnauthorizedException("Refresh Token không thành công");
    }
    const tokens = tokenService.createTokens(decodeRefreshToken.userId);

    return tokens;
  },
};

export default authService;
