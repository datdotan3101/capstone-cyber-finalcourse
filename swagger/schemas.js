// swagger/schemas.js
export const schemas = {
  LoginRequest: {
    type: "object",
    required: ["email", "mat_khau"],
    properties: {
      email: { type: "string", example: "user@example.com" },
      mat_khau: { type: "string", example: "123456" },
    },
  },
  CongViec: {
    type: "object",
    properties: {
      id: { type: "integer", example: 1 },
      ten_cong_viec: { type: "string" },
      danh_gia: { type: "integer" },
      gia_tien: { type: "integer" },
      hinh_anh: { type: "string" },
      mo_ta: { type: "string" },
      mo_ta_ngan: { type: "string" },
      sao_cong_viec: { type: "integer" },
      ma_chi_tiet_loai: { type: "integer" },
      nguoi_tao: { type: "integer" },
    },
  },
};
