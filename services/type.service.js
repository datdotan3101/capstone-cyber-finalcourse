import prisma from "../common/Prisma/init.prisma";

const typeWorkServices = {
  typeWorkGet: async (req) => {
    const { ten_loai_cong_viec } = req.query;
    const typeWork = await prisma.loaiCongViec.findMany({
      where: { ten_loai_cong_viec: ten_loai_cong_viec },
    });
    return typeWork;
  },
  typeWorkPost: async (req) => {
    const { ten_loai_cong_viec } = req.body;

    const typeWork = await prisma.loaiCongViec.create({
      data: { ten_loai_cong_viec: ten_loai_cong_viec },
    });
    return typeWork;
  },
  typeWorkPagination: async (req) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const skip = (page - 1) * pageSize;

    const [data, totalCount] = await Promise.all([
      prisma.loaiCongViec.findMany({
        skip: skip,
        take: pageSize,
      }),
      prisma.loaiCongViec.count(),
    ]);

    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      currentPage: page,
      pageSize: pageSize,
      totalPages: totalPages,
      totalItems: totalCount,
      data: data,
    };
  },
  typeWorkGetId: async (req) => {
    const { id } = req.params;
    const typeWorkGetId = await prisma.loaiCongViec.findMany({
      where: { id: Number(id) },
    });
    return typeWorkGetId;
  },
  typeWorkPutId: async (req) => {
    const { id } = req.params;
    const { ten_loai_cong_viec } = req.body;

    const typeWorkPutId = await prisma.loaiCongViec.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ten_loai_cong_viec: ten_loai_cong_viec,
      },
    });
    return typeWorkPutId;
  },
  typeWorkDeleteId: async (req) => {
    const id = parseInt(req.params.id);

    await prisma.chiTietLoaiCongViec.deleteMany({
      where: {
        ma_loai_cong_viec: id,
      },
    });

    const deleted = await prisma.loaiCongViec.delete({
      where: {
        id: id,
      },
    });

    return deleted;
  },
};
export default typeWorkServices;
