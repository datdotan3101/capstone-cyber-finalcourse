import prisma from "../common/Prisma/init.prisma";

const detailWorkServices = {
  detailWorkGet: async (req) => {
    const { ten_chi_tiet, hinh_anh } = req.query;
    const chiTietCongViec = await prisma.chiTietLoaiCongViec.findMany({
      where: { ten_chi_tiet: ten_chi_tiet, hinh_anh: hinh_anh },
      include: {
        CongViec: {
          select: {
            ten_cong_viec: true,
            mo_ta: true,
            mo_ta_ngan: true,
            sao_cong_viec: true,
            gia_tien: true,
            ma_chi_tiet_loai: true,
            nguoi_tao: true,
            danh_gia: true,
          },
        },
      },
    });
    return chiTietCongViec;
  },
  detailWorkPost: async (req) => {
    const { ten_chi_tiet, hinh_anh, ma_loai_cong_viec } = req.body;
    const newWork = await prisma.chiTietLoaiCongViec.create({
      data: {
        ten_chi_tiet: ten_chi_tiet,
        hinh_anh: hinh_anh,
        ma_loai_cong_viec: ma_loai_cong_viec,
      },
    });
    return newWork;
  },
  detailWorPagination: async (req) => {
    const { page = 1, pageSize = 2, keyword = "" } = req.query;

    const take = Number(pageSize);
    const skip = (Number(page) - 1) * take;

    const whereClause = {
      ten_chi_tiet: {
        contains: keyword || undefined,
      },
    };

    const [data, totalCount] = await Promise.all([
      prisma.chiTietLoaiCongViec.findMany({
        where: whereClause,
        skip,
        take,
      }),
      prisma.chiTietLoaiCongViec.count({ where: whereClause }),
    ]);

    return {
      currentPage: Number(page),
      pageSize: take,
      totalPages: Math.ceil(totalCount / take),
      totalItems: totalCount,
      data,
    };
  },
  detailWorkGetID: async (req) => {
    const { id } = req.params;
    const detailW_ID = await prisma.chiTietLoaiCongViec.findUnique({
      where: { id: Number(id) },
      include: { CongViec: true },
    });
    return detailW_ID;
  },
  detailWorkPutID: async (req) => {
    const { id } = req.params;
    const { ten_chi_tiet, hinh_anh, ma_loai_cong_viec } = req.body;

    const updateDetail = await prisma.chiTietLoaiCongViec.update({
      where: {
        id: Number(id),
      },
      data: {
        ten_chi_tiet,
        hinh_anh,
        ma_loai_cong_viec,
      },
    });

    return updateDetail;
  },
  detailWorkDeleteID: async (req) => {
    const { id } = req.params;

    const relatedJobs = await prisma.congViec.findMany({
      where: {
        ma_chi_tiet_loai: Number(id),
      },
    });

    if (relatedJobs.length > 0) {
      throw new Error(
        "Không thể xóa vì vẫn còn công việc liên kết đến chi tiết này."
      );
    }

    const deletedDetail = await prisma.chiTietLoaiCongViec.delete({
      where: {
        id: Number(id),
      },
    });

    return {
      message: "Đã xóa thành công chi tiết loại công việc.",
      deletedDetail,
    };
  },
};

export default detailWorkServices;
