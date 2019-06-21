import { useTranslation } from "react-i18next";
import LayzyLoad from './components/LayzyLoad'

const CustomerInformation = LayzyLoad(import("./containers/Customers/CustomerInformation"))
const CustomerList = LayzyLoad(import("./containers/Customers/CustomerList"))
const CustomerAdd = LayzyLoad(import("./containers/Customers/CustomerAdd"))
const TreatmentRegimen = LayzyLoad(import("./containers/TreatmentRegimen"))
const EmployeesList = LayzyLoad(import("./containers/Employees/EmployeesList"))
const EmployeesAdd = LayzyLoad(import("./containers/Employees/EmployeesAdd"))

const routeStaff = t => {
  return [
    { path: "/", exact: true, name: t("Home") },
    {
      path: "/customer-information",
      name: t("Hồ sơ khách hàng"),
      component: CustomerInformation
    },
    {
      path: "/list-customer",
      name: t("Danh sách khách hàng"),
      component: CustomerList
    },
    {
      path: "/add-customer",
      name: t("Thêm khách hàng"),
      component: CustomerAdd
    },
    {
      path: "/treatment-regimen",
      name: t("Phác đồ điều trị"),
      component: TreatmentRegimen
    },
    {
      path: '/list-employees',
      name: t('Danh sách nhân viên'),
      component: EmployeesList
    },
    {
      path: '/add-employees',
      name: t('Thêm nhân viên'),
      component: EmployeesAdd
    }
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
