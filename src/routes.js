import React from "react";
import { useTranslation } from "react-i18next";
import LayzyLoad from "./components/LayzyLoad";
import { Redirect } from "react-router-dom";
import routesMap from "./common/routesMap";
import useUserLogin from "./hooks/useUserLogin";

// ========================== PRODUCTS ===================================
const ListProduct = LayzyLoad(import("./containers/Products/ListProduct"));
const OutInBound = LayzyLoad(import("./containers/Products/OutInBound"));
const AddProduct = LayzyLoad(import("./containers/Products/AddProduct"));
const InventoryManagement = LayzyLoad(
  import("./containers/Products/InventoryManagement")
);

// ========================== CUSTOMERS ===================================
const MemberCard = LayzyLoad(import("./containers/Customers/MemberCard"));
const ListCustomer = LayzyLoad(import("./containers/Customers/ListCustomer"));
const AddCustomer = LayzyLoad(import("./containers/Customers/AddCustomer"));
const TreatmentRegimen = LayzyLoad(
  import("./containers/Customers/TreatmentRegimen")
);
const RegisterService = LayzyLoad(
  import("./containers/Customers/RegisterService")
);

// ========================== EMPLOYEES ===================================
const ListEmployees = LayzyLoad(import("./containers/Employees/ListEmployees"));
const AddEmployees = LayzyLoad(import("./containers/Employees/AddEmployees"));
const Commission = LayzyLoad(import("./containers/Employees/Commission"));

// ========================== ORDERS ===================================
const AddOrder = LayzyLoad(import("./containers/Orders/AddOrder"));
const ListOrder = LayzyLoad(import("./containers/Orders/ListOrder"));

// ========================== SERVICES ===================================
const Services = LayzyLoad(import("./containers/Services/ListService"));
const AddService = LayzyLoad(import("./containers/Services/AddService"));

// ========================== UNSORTED GROUP ===============================
const GeneralInformation = LayzyLoad(import("./containers/GeneralInformation"));
const Dashboard = LayzyLoad(import("./containers/Dashboard"));
const ReportByDate = LayzyLoad(import("./containers/ReportByDate"));
const BranchManagement = LayzyLoad(import("./containers/BranchManagement"));
const Treatment = LayzyLoad(import("./containers/Dashboard/Treatment"));
const AppointmentSchedule = LayzyLoad(
  import("./containers/AppointmentSchedule")
);

const RedirectHome = () => {
  return <Redirect to={routesMap.listCustomer} />;
};

const routeStaff = t => {
  return [
    { path: "/", exact: true, name: t("Home"), component: RedirectHome },
    {
      path: routesMap.listCustomer,
      name: t("DS khách hàng"),
      component: ListCustomer
    },
    {
      path: routesMap.addCustomer,
      name: t("Thêm khách hàng"),
      component: AddCustomer
    },
    {
      path: routesMap.listEmployees,
      name: t("DS nhân viên"),
      component: ListEmployees
    },
    {
      path: routesMap.addEmployees,
      name: t("Thêm nhân viên"),
      component: AddEmployees
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
      component: ListOrder
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
      component: ListProduct
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
      component: OutInBound
    },
    {
      path: routesMap.addProduct,
      name: t("Thêm sản phẩm"),
      component: AddProduct
    },
    {
      path: routesMap.addService,
      name: t("Thêm dịch vụ"),
      component: AddService
    },
    {
      path: `${routesMap.treatmentRegimen}/:customerId`,
      name: t("Phác đồ điều trị"),
      component: TreatmentRegimen
    },
    {
      path: `${routesMap.registerService}/:customerId`,
      name: t("Đăng ký sử dụng dịch vụ"),
      component: RegisterService
    },
    {
      path: `${routesMap.dashboard}`,
      name: t("Dashboard"),
      component: Dashboard
    },
    {
      path: `${routesMap.treatment}/:customerId`,
      name: t("Phác đồ điều trị"),
      component: Treatment
    }
  ];
};

const routeMember = t => {
  return [{ path: "/", exact: true, name: t("Home"), component: RedirectHome }];
};

const useRoutes = () => {
  const { t } = useTranslation();
  const userLogin = useUserLogin();
  if (userLogin && userLogin.name === "Admin") return routeStaff(t);
  if (userLogin && userLogin.name === "Member") return routeMember(t);
  return routeMember(t);
};

export default useRoutes;
