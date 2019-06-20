import { useTranslation } from "react-i18next";
import LayzyLoad from './components/LayzyLoad'

const CustomerInformation = LayzyLoad(import("./containers/CustomerInformation"))
const TreatmentRegimen = LayzyLoad(import("./containers/TreatmentRegimen"))

const routeStaff = t => {
  return [
    { path: "/", exact: true, name: t("Home") },
    {
      path: "/customer-information",
      name: t("Hồ sơ khách hàng"),
      component: CustomerInformation
    },
    {
      path: "/treatment-regimen",
      name: t("Phác đồ điều trị"),
      component: TreatmentRegimen
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
