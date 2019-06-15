import CustomerInformation from "./containers/Customer/CustomerInformation";
import { useTranslation } from "react-i18next";
import LayzyLoad from './components/LayzyLoad'

const Dashboard = LayzyLoad(import("./containers/Dashboard/Dashboard"))
const About = LayzyLoad(import("./containers/About/About"))

const routeStaff = t => {
  return [
    { path: "/", exact: true, name: t("Home") },
    { path: "/dashboard", name: t("Dashboard"), component: Dashboard },
    { path: "/about", name: t("About"), component: About },
    {
      path: "/customer-information",
      name: t("Hồ sơ khách hàng"),
      component: CustomerInformation
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
