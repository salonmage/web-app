import React from 'react'
import { useTranslation } from "react-i18next";
import LayzyLoad from "./components/LayzyLoad";
import { Redirect } from "react-router-dom";
import routesMap from './common/routesMap'

const MemberCard = LayzyLoad(import("./containers/MemberCard"));
const Products = LayzyLoad(import("./containers/Products"));
const CustomerList = LayzyLoad(import("./containers/Customers"));
const CustomerAdd = LayzyLoad(import("./containers/Customers/add"));
const EmployeesList = LayzyLoad(import("./containers/Employees"));
const EmployeesAdd = LayzyLoad(import("./containers/Employees/add"));
const GeneralInformation = LayzyLoad(import("./containers/GeneralInformation"));
const AppointmentSchedule = LayzyLoad(import("./containers/AppointmentSchedule"));
const AddOrder = LayzyLoad(import("./containers/Orders/add"));
const Orders = LayzyLoad(import("./containers/Orders"));
const ReportByDate = LayzyLoad(import("./containers/ReportByDate"));
const Commission = LayzyLoad(import("./containers/Commission"));
const InventoryManagement = LayzyLoad(import("./containers/InventoryManagement"));
const BranchManagement = LayzyLoad(import("./containers/BranchManagement"));
const Services = LayzyLoad(import("./containers/Services"));
const InboundOutbound = LayzyLoad(import("./containers/InboundOutbound"));
const ProductAdd = LayzyLoad(import("./containers/Products/add"));
const AddService = LayzyLoad(import("./containers/Services/add"));

const RedirectHome = () => {
  return <Redirect to="/list-customer" />;
};

const routeStaff = t => {
  return [
    { path: "/", exact: true, name: t("Home"), component: RedirectHome },
    {
      path: routesMap.listCustomer,
      name: t("DS khách hàng"),
      component: CustomerList
    },
    {
      path: routesMap.addCustomer,
      name: t("Thêm khách hàng"),
      component: CustomerAdd
    },
    {
      path: routesMap.listEmployees,
      name: t("DS nhân viên"),
      component: EmployeesList
    },
    {
      path: routesMap.addEmployees,
      name: t("Thêm nhân viên"),
      component: EmployeesAdd
    },
    {
      path: routesMap.generalInformation,
      name: t("Thông tin chung"),
      component: GeneralInformation
    },
    {
      path: routesMap.appointmentSchedule,
      name: t("Đặt lịch"),
      component: AppointmentSchedule
    },
    {
      path: routesMap.addOrder,
      name: t("Thêm hóa đơn"),
      component: AddOrder
    },
    {
      path: routesMap.listOrder,
      name: t("Danh sách hóa đơn"),
      component: Orders
    },
    {
      path: routesMap.reportByDay,
      name: t("Báo cáo theo ngày"),
      component: ReportByDate
    },
    {
      path: routesMap.commission,
      name: t("Hoa hồng"),
      component: Commission
    },
    {
      path: routesMap.memberCard,
      name: t("Thẻ thành viên"),
      component: MemberCard
    },
    {
      path: routesMap.listProduct,
      name: t("Danh sách sản phẩm"),
      component: Products
    },
    {
      path: routesMap.inventoryManagement,
      name: t("Quản lý tồn kho"),
      component: InventoryManagement
    },
    {
      path: routesMap.branchManagement,
      name: t("Quản lý chi nhánh"),
      component: BranchManagement
    },
    {
      path: routesMap.listService,
      name: t("Danh sách dịch vụ"),
      component: Services
    },
    {
      path: routesMap.inboundOutbound,
      name: t("Nhập xuất kho"),
      component: InboundOutbound
    },
    {
      path: routesMap.addProduct,
      name: t("Thêm sản phẩm"),
      component: ProductAdd
    },
    {
      path: routesMap.addService,
      name: t("Thêm dịch vụ"),
      component: AddService
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
