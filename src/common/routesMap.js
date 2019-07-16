export const parentRoutes = {
  customer: "/khach-hang",
  service: "/dich-vu",
  employess: "/nhan-vien",
  product: "/san-pham",
  order: "/thu-ngan"
};

export default {
  home: "/",
  listCustomer: parentRoutes.customer + "/danh-sach-khach-hang",
  addCustomer: parentRoutes.customer + "/them-khach-hang",
  listEmployees: parentRoutes.employess + "/danh-sach-nhan-vien",
  addEmployees: parentRoutes.employess + "/them-nhan-vien",
  generalInformation: "/thong-tin-chung",
  appointmentSchedule: "/dat-lich",
  addOrder: parentRoutes.order + "/them-hoa-don",
  listOrder: parentRoutes.order + "/danh-sach-hoa-don",
  reportByDay: "/bao-cao-theo-ngay",
  commission: "/hoa-hong",
  memberCard: "/the-thanh-vien",
  listProduct: parentRoutes.product + "/danh-sach-san-pham",
  addProduct: parentRoutes.product + "/them-san-pham",
  inventoryManagement: parentRoutes.product + "/quan-ly-ton-kho",
  inboundOutbound: parentRoutes.product + "/xuat-nhap-kho",
  branchManagement: "/quan-ly-chi-nhanh",
  comboService: parentRoutes.service + "/danh-sach-dich-vu",
  service: parentRoutes.service + "/them-dich-vu",
  login: "/login",
  register: "/register",
  notFound: "/404",
  dashboard: "/dashboard",
  detailCustomer: "/chi-tiet-khach-hang"
};
