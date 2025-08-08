import { BadrequestException } from "../common/helpers/exception.helper";
import prisma from "../common/Prisma/init.prisma";

const commentService = {
  binhLuanGet: async (req) => {
    const {
      ma_cong_viec,
      ma_nguoi_binh_luan,
      ngay_binh_luan,
      noi_dung,
      sao_binh_luan,
    } = req.query;

    const binhLuan = await prisma.binhLuan.findMany({
      where: {
        ma_nguoi_binh_luan: ma_nguoi_binh_luan,
        ma_cong_viec: ma_cong_viec,
        noi_dung: noi_dung,
        ngay_binh_luan: ngay_binh_luan,
        sao_binh_luan: sao_binh_luan,
      },
    });
    return binhLuan;
  },
  binhLuanPost: async (req) => {
    const { ma_nguoi_binh_luan, ma_cong_viec, noi_dung } = req.body;

    const binhLuanNew = await prisma.binhLuan.create({
      data: {
        ma_nguoi_binh_luan: ma_nguoi_binh_luan,
        ma_cong_viec: ma_cong_viec,
        noi_dung: noi_dung,
      },
    });
    return binhLuanNew;
  },
  binhLuanPut: async (req) => {
    const { id } = req.params;
    const { noi_dung, sao_binh_luan } = req.body;

    const commentId = Number(id);
    if (isNaN(commentId)) {
      throw new BadrequestException("ID không hợp lệ");
    }

    // Kiểm tra xem bình luận có tồn tại không
    const existingComment = await prisma.binhLuan.findUnique({
      where: { id: commentId },
    });

    if (!existingComment) {
      throw new BadrequestException("Không tìm thấy bình luận");
    }

    // Cập nhật bình luận
    const updatedComment = await prisma.binhLuan.update({
      where: { id: commentId },
      data: {
        noi_dung,
        sao_binh_luan: Number(sao_binh_luan),
        ngay_binh_luan: new Date(),
      },
    });

    return updatedComment;
  },
  binhLuanDelete: async (req) => {
    const { id } = req.params;

    // Ép kiểu sang số
    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      throw new Error("ID không hợp lệ");
    }

    const binhLuanDelete = await prisma.binhLuan.delete({
      where: { id: parsedId },
    });

    return binhLuanDelete;
  },
  binhLuanTheoCongViec: async (req) => {
    const { id } = req.params;

    const binhLuanCV = await prisma.binhLuan.findMany({
      where: { ma_cong_viec: Number(id) },
      include: {
        NguoiDung: {
          select: { id: true, name: true, email: true },
        },
      },
      orderBy: {
        ngay_binh_luan: "desc",
      },
    });

    return binhLuanCV;
  },
};

export default commentService;
