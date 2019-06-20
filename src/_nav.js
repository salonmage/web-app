import { useTranslation } from "react-i18next";

const navStaff = (t) => {
  return {
    items: [
      {
        name: t('Hồ sơ khách hàng'),
        url: "/customer-information",
        icon: "icon-drop"
      },
      {
        name: t('Phác đồ điều trị'),
        url: "/treatment-regimen",
        icon: "icon-drop"
      }
    ]
  }
};

// const navMember = () => {
//   return {

//   }
// };

const useNav = () => {
  const { t } = useTranslation();
  const nav = navStaff(t)
  return nav
};

export default useNav;
