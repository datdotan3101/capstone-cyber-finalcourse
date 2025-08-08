import { BadrequestException } from "../common/helpers/exception.helper";
import prisma from "../common/Prisma/init.prisma";

const rentServices = {
  rentGet: async (req) => {
    const { ma_cong_viec, ma_nguoi_thue, ngay_thue, hoan_thanh } = req.query;
    const rentGet = await prisma.thueCongViec.findMany({
      where: {
        ma_cong_viec: ma_cong_viec,
        ma_nguoi_thue: ma_nguoi_thue,
        ngay_thue: ngay_thue,
        hoan_thanh: hoan_thanh,
      },
    });
    return rentGet;
  },
  rentPost: async (req) => {
    const { maCongViec, maNguoiThue, ngayThue, hoanThanh } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!maCongViec || !maNguoiThue || !ngayThue) {
      throw new BadrequestException("Vui lòng cung cấp đầy đủ thông tin thuê");
    }

    // Kiểm tra xem công việc có tồn tại không
    const congViec = await prisma.congViec.findUnique({
      where: { id: Number(maCongViec) },
    });

    if (!congViec) {
      throw new BadrequestException("Công việc không tồn tại");
    }

    // Kiểm tra người thuê có tồn tại không
    const nguoiThue = await prisma.nguoiDung.findUnique({
      where: { id: Number(maNguoiThue) },
    });

    if (!nguoiThue) {
      throw new BadrequestException("Người thuê không tồn tại");
    }

    // Tạo bản ghi thuê công việc
    const rentRecord = await prisma.thueCongViec.create({
      data: {
        ma_cong_viec: Number(maCongViec),
        ma_nguoi_thue: Number(maNguoiThue),
        ngay_thue: new Date(ngayThue), // convert từ string sang Date
        hoan_thanh: Boolean(hoanThanh),
      },
    });

    return rentRecord;
  },
  rentPagination: async (req) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const skip = (page - 1) * pageSize;

    const totalRents = await prisma.thueCongViec.count();

    const rents = await prisma.thueCongViec.findMany({
      skip: skip,
      take: pageSize,
      orderBy: { id: "asc" },
      select: {
        id: true,
        ma_cong_viec: true,
        ma_nguoi_thue: true,
        ngay_thue: true,
        hoan_thanh: true,
        CongViec: {
          select: {
            ten_cong_viec: true,
          },
        },
        NguoiDung: {
          select: {
            name: true,
          },
        },
      },
    });

    return {
      currentPage: page,
      pageSize: pageSize,
      totalRecords: totalRents,
      totalPages: Math.ceil(totalRents / pageSize),
      data: rents,
    };
  },
  rentGetId: async (req) => {
    const { id } = req.params;

    const rentId = Number(id);
    if (isNaN(rentId)) {
      throw new BadrequestException("ID không hợp lệ");
    }

    const rentRecord = await prisma.thueCongViec.findUnique({
      where: {
        id: rentId,
      },
      select: {
        id: true,
        ma_cong_viec: true,
        ma_nguoi_thue: true,
        ngay_thue: true,
        hoan_thanh: true,
      },
    });

    if (!rentRecord) {
      throw new BadrequestException("Không tìm thấy thông tin thuê");
    }

    return rentRecord;
  },
  rentPutId: async (req) => {
    const { id } = req.params;
    const { maCongViec, maNguoiThue, ngayThue, hoanThanh } = req.body;

    const rentId = Number(id);
    if (isNaN(rentId)) {
      throw new BadrequestException("ID không hợp lệ");
    }

    // Kiểm tra bản ghi có tồn tại không
    const existingRent = await prisma.thueCongViec.findUnique({
      where: { id: rentId },
    });

    if (!existingRent) {
      throw new BadrequestException("Không tìm thấy bản ghi thuê công việc");
    }

    const updatedRent = await prisma.thueCongViec.update({
      where: { id: rentId },
      data: {
        ma_cong_viec:
          maCongViec !== undefined
            ? Number(maCongViec)
            : existingRent.ma_cong_viec,
        ma_nguoi_thue:
          maNguoiThue !== undefined
            ? Number(maNguoiThue)
            : existingRent.ma_nguoi_thue,
        ngay_thue: ngayThue ? new Date(ngayThue) : existingRent.ngay_thue,
        hoan_thanh:
          typeof hoanThanh === "boolean" ? hoanThanh : existingRent.hoan_thanh,
      },
    });

    return updatedRent;
  },
  rentDeleteId: async (req) => {
    const { id } = req.params;

    const rentId = Number(id);
    if (isNaN(rentId)) {
      throw new BadrequestException("ID không hợp lệ");
    }

    // Kiểm tra xem bản ghi có tồn tại không
    const existingRent = await prisma.thueCongViec.findUnique({
      where: { id: rentId },
    });

    if (!existingRent) {
      throw new BadrequestException("Không tìm thấy bản ghi thuê công việc");
    }

    // Xoá bản ghi
    const deletedRent = await prisma.thueCongViec.delete({
      where: { id: rentId },
    });

    return {
      message: "Xoá bản ghi thuê thành công",
      deleted: deletedRent,
    };
  },
  listRented: async (req) => {
    const rentedJobs = await prisma.thueCongViec.findMany({
      where: {
        hoan_thanh: false,
      },
      select: {
        id: true,
        ngay_thue: true,
        hoan_thanh: true,
        ma_cong_viec: true,
        ma_nguoi_thue: true,
        CongViec: {
          select: {
            ten_cong_viec: true,
            gia_tien: true,
            mo_ta_ngan: true,
          },
        },
        NguoiDung: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        ngay_thue: "desc",
      },
    });

    return rentedJobs;
  },
  finishWork: async (req) => {
    const { id } = req.params;
    const rentId = Number(id);

    if (isNaN(rentId)) {
      throw new BadrequestException("ID không hợp lệ");
    }

    // Tìm bản ghi theo ID
    const rentRecord = await prisma.thueCongViec.findUnique({
      where: { id: rentId },
    });

    if (!rentRecord) {
      throw new BadrequestException("Không tìm thấy bản ghi thuê công việc");
    }

    // Nếu hoan_thanh đã là true thì không cần cập nhật lại
    if (rentRecord.hoan_thanh === 1) {
      return {
        message: `Công việc #${rentId} đã hoàn thành trước đó.`,
        data: rentRecord,
      };
    }

    // Cập nhật hoan_thanh thành true
    const updated = await prisma.thueCongViec.update({
      where: { id: rentId },
      data: {
        hoan_thanh: true,
      },
    });

    return {
      message: `Đã cập nhật trạng thái hoàn thành cho công việc #${rentId}`,
      data: updated,
    };
  },
};

export default rentServices;
