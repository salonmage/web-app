import React from 'react'
import { useTranslation } from "react-i18next";
import LayzyLoad from "./components/LayzyLoad";
import { Redirect } from "react-router-dom";

const CustomerList = LayzyLoad(import("./containers/Customers/CustomerList"));
const CustomerAdd = LayzyLoad(import("./containers/Customers/CustomerAdd"));
const EmployeesList = LayzyLoad(import("./containers/Employees/EmployeesList"));
const EmployeesAdd = LayzyLoad(import("./containers/Employees/EmployeesAdd"));
const GeneralInformation = LayzyLoad(import("./containers/GeneralInformation"));

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
