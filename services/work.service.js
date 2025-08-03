import { BadrequestException } from "../common/helpers/exception.helper";
import prisma from "../common/Prisma/init.prisma";

const workServices = {
  congViecGet: async (req) => {
    const {
      ten_cong_viec,
      gia_tien,
      mo_ta,
      mo_ta_ngan,
      danh_gia,
      sao_cong_viec,
      ma_chi_tiet_loai,
      nguoi_tao,
    } = req.query;
    const congViec = await prisma.congViec.findMany({
      where: {
        ten_cong_viec: ten_cong_viec,
        gia_tien: gia_tien,
        mo_ta: mo_ta,
        mo_ta_ngan: mo_ta_ngan,
        danh_gia: danh_gia,
        sao_cong_viec: sao_cong_viec,
        ma_chi_tiet_loai: ma_chi_tiet_loai,
        nguoi_tao: nguoi_tao,
      },
    });
    return congViec;
  },
  congViecPost: async (req) => {
    const {
      ten_cong_viec,
      danh_gia,
      gia_tien,
      nguoi_tao,
      hinh_anh,
      mo_ta,
      ma_chi_tiet_loai,
      mo_ta_ngan,
      sao_cong_viec,
    } = req.body;

    const congViecPost = await prisma.congViec.create({
      data: {
        ten_cong_viec: ten_cong_viec,
        danh_gia: danh_gia,
        gia_tien: gia_tien,
        nguoi_tao: nguoi_tao,
        hinh_anh: hinh_anh,
        mo_ta: mo_ta,
        ma_chi_tiet_loai: ma_chi_tiet_loai,
        mo_ta_ngan: mo_ta_ngan,
        sao_cong_viec: sao_cong_viec,
      },
    });
    return congViecPost;
  },
  congViecPagination: async (req) => {
    // Lấy page và pageSize từ query, gán mặc định nếu không truyền
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    // Tính toán skip và take
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    // Lấy tổng số bản ghi
    const totalCount = await prisma.congViec.count();

    // Lấy danh sách công việc theo trang
    const congViecList = await prisma.congViec.findMany({
      skip,
      take,
      orderBy: {
        id: "asc", // sắp xếp theo id tăng dần
      },
    });

    // Tính tổng số trang
    const totalPages = Math.ceil(totalCount / pageSize);

    // Trả về kết quả phân trang
    return {
      currentPage: page,
      pageSize,
      totalPages,
      totalCount,
      data: congViecList,
    };
  },
  congViecGetID: async (req) => {
    const id = parseInt(req.params.id);

    // Kiểm tra id hợp lệ
    if (isNaN(id)) {
      throw new Error("Invalid ID. Must be a number.");
    }

    // Tìm công việc theo ID
    const congViec = await prisma.congViec.findUnique({
      where: { id: id },
    });

    // Nếu không tìm thấy
    if (!congViec) {
      throw new BadrequestException("Công việc không tồn tại.");
    }

    return congViec;
  },
  congViecPutID: async (req) => {
    const id = parseInt(req.params.id); // Lấy ID từ URL params

    // Kiểm tra ID hợp lệ
    if (isNaN(id)) {
      throw new BadrequestException("ID không hợp lệ");
    }

    // Lấy dữ liệu cần cập nhật từ body
    const {
      ten_cong_viec,
      danh_gia,
      gia_tien,
      hinh_anh,
      mo_ta,
      mo_ta_ngan,
      sao_cong_viec,
      ma_chi_tiet_loai,
      nguoi_tao,
    } = req.body;

    // Kiểm tra công việc tồn tại chưa
    const congViecCheck = await prisma.congViec.findUnique({
      where: { id },
    });

    if (!congViecCheck) {
      throw new BadrequestException("Không tìm thấy công việc có ID này");
    }

    // Cập nhật công việc
    const congViecUpdate = await prisma.congViec.update({
      where: { id },
      data: {
        ten_cong_viec,
        danh_gia,
        gia_tien,
        hinh_anh,
        mo_ta,
        mo_ta_ngan,
        sao_cong_viec,
        ma_chi_tiet_loai,
        nguoi_tao,
      },
    });

    return congViecUpdate;
  },
  congViecDeleteID: async (req) => {
    const { id } = req.params;
    const congViecDeleteID = await prisma.congViec.delete({
      where: { id: Number(id) },
    });

    if (!congViecDeleteID) {
      throw new BadrequestException(`Không xóa được công việc có ID: ${id}`);
    }

    return congViecDeleteID;
  },
  
};
export default workServices;
