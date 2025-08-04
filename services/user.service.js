import { BadrequestException } from "../common/helpers/exception.helper";
import prisma from "../common/Prisma/init.prisma";
import bcrypt from "bcrypt";

const usersServices = {
  usersGet: async (req) => {
    const { name } = req.query;
    const nguoiDungGet = await prisma.nguoiDung.findMany({
      where: { name: name },
    });
    return nguoiDungGet;
  },
  usersPost: async (req) => {
    const {
      name,
      email,
      pass_word,
      phone,
      birth_day,
      gender,
      role,
      certification,
      skill,
    } = req.body;

    const passHash = bcrypt.hashSync(pass_word, 10);

    const usersPost = await prisma.nguoiDung.create({
      data: {
        name: name,
        email: email,
        pass_word: passHash,
        phone: phone,
        birth_day: birth_day,
        gender: gender,
        role: role,
        certification: certification,
        skill: skill,
      },
    });

    delete usersPost.pass_word;

    return usersPost;
  },
  usersDelete: async (req) => {
    const { name, email, pass_word } = req.body;

    const usersDelete = await prisma.nguoiDung.delete({
      where: { name: name, email: email, pass_word: pass_word },
    });

    delete usersDelete.pass_word;

    return usersDelete;
  },
  usersPagination: async (req) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const skip = (page - 1) * pageSize;

    // Lấy tổng số user để tính tổng số trang
    const totalUsers = await prisma.nguoiDung.count();

    const users = await prisma.nguoiDung.findMany({
      skip: skip,
      take: pageSize,
      orderBy: { id: "asc" },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        birth_day: true,
        gender: true,
        role: true,
        skill: true,
        certification: true,
      },
    });

    return {
      currentPage: page,
      pageSize: pageSize,
      totalUsers: totalUsers,
      totalPages: Math.ceil(totalUsers / pageSize),
      data: users,
    };
  },
  usersGetId: async (req) => {
    const { id } = req.params;

    const userGetId = await prisma.nguoiDung.findUnique({
      where: { id: Number(id) },
    });

    if (!userGetId) {
      throw new BadrequestException("ID không tồn tại");
    }

    return userGetId;
  },
  usersPutId: async (req) => {
    const { id } = req.params;

    const {
      name,
      email,
      phone,
      birth_day,
      gender,
      role,
      skill,
      certification,
    } = req.body;

    // Check Id is exist
    const checkId = await prisma.nguoiDung.findUnique({
      where: { id: Number(id) },
    });

    if (!checkId) {
      throw new BadrequestException("ID không tồn tại");
    }

    const usersPutId = await prisma.nguoiDung.update({
      where: { id: Number(id) },
      data: {
        name: name,
        email: email,
        phone: phone,
        birth_day: birth_day,
        gender: gender,
        role: role,
        skill: skill,
        certification: certification,
      },
    });
    return usersPutId;
  },
  usersGetName: async (req) => {
    const { name } = req.params;

    console.log("req.params.name =", req.params.name);
    if (!name || name.trim() === "") {
      throw new BadrequestException("Tên người dùng không được để trống");
    }

    const users = await prisma.nguoiDung.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
      },
    });

    return users;
  },
};

export default usersServices;
