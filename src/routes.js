import React from 'react'
import { useTranslation } from "react-i18next";
import LayzyLoad from "./components/LayzyLoad";
import { Redirect } from "react-router-dom";

const MemberCard = LayzyLoad(import("./containers/MemberCard"));
const Products = LayzyLoad(import("./containers/Products"));
const CustomerList = LayzyLoad(import("./containers/Customers/CustomerList"));
const CustomerAdd = LayzyLoad(import("./containers/Customers/CustomerAdd"));
const EmployeesList = LayzyLoad(import("./containers/Employees/EmployeesList"));
const EmployeesAdd = LayzyLoad(import("./containers/Employees/EmployeesAdd"));
const GeneralInformation = LayzyLoad(import("./containers/GeneralInformation"));
const AppointmentSchedule = LayzyLoad(import("./containers/AppointmentSchedule"));
const Cashier = LayzyLoad(import("./containers/Cashier"));
const BillList = LayzyLoad(import("./containers/BillList"));
const ReportByDate = LayzyLoad(import("./containers/ReportByDate"));
const Commission = LayzyLoad(import("./containers/Commission"));
const InventoryManagement = LayzyLoad(import("./containers/InventoryManagement"));
const BranchManagement = LayzyLoad(import("./containers/BranchManagement"));
const Services = LayzyLoad(import("./containers/Services"));
const InboundOutbound = LayzyLoad(import("./containers/InboundOutbound"));

const RedirectHome = () => {
  return <Redirect to="/list-customer" />;
};

const routeStaff = t => {
  return [
    { path: "/", exact: true, name: t("Home"), component: RedirectHome },
    {
      path: "/list-customer",
      name: t("DS khách hàng"),
      component: CustomerList
    },
    {
      path: "/add-customer",
      name: t("Thêm khách hàng"),
      component: CustomerAdd
    },
    {
      path: "/list-employees",
      name: t("DS nhân viên"),
      component: EmployeesList
    },
    {
      path: "/add-employees",
      name: t("Thêm nhân viên"),
      component: EmployeesAdd
    },
    {
      path: "/thong-tin-chung",
      name: t("Thông tin chung"),
      component: GeneralInformation
    },
    {
      path: "/lich-hen",
      name: t("Lịch hẹn"),
      component: AppointmentSchedule
    },
    {
      path: "/thu-ngan",
      name: t("Thu ngân"),
      component: Cashier
    },
    {
      path: "/danh-sach-hoa-don",
      name: t("Danh sách hóa đơn"),
      component: BillList
    },
    {
      path: "/bao-cao-theo-ngay",
      name: t("Báo cáo theo ngày"),
      component: ReportByDate
    },
    {
      path: "/hoa-hong-nhan-vien",
      name: t("Hoa hồng nhân viên"),
      component: Commission
    },
    {
      path: "/the-thanh-vien",
      name: t("Thẻ thành viên"),
      component: MemberCard
    },
    {
      path: "/danh-sach-san-pham",
      name: t("Danh sách sản phẩm"),
      component: Products
    },
    {
      path: "/quan-ly-ton-kho",
      name: t("Danh sách dịch vụ"),
      component: InventoryManagement
    },
    {
      path: "/quan-ly-chi-nhanh",
      name: t("Quản lý chi nhánh"),
      component: BranchManagement
    },
    {
      path: "/danh-sach-dich-vu",
      name: t("Danh sách dịch vụ"),
      component: Services
    },
    {
      path: "/nhap-xuat-kho-hang",
      name: t("Nhập xuất kho hàng"),
      component: InboundOutbound
    },
  ];
};

// const routeMember = t => {
//   return [];
// };

const useRoutes = () => {
  const { t } = useTranslation();
  const routes = routeStaff(t);
  return routes;
};

export default useRoutes;
