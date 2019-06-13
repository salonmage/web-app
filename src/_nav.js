import { useTranslation } from "react-i18next";

const navStaff = (t) => {
  return {
    items: [
      {
        name: t('Dashboard'),
        url: "/dashboard",
        icon: "icon-speedometer",
        badge: {
          variant: "info",
          text: "NEW"
        }
      },
      {
        name: t('About'),
        url: "/about",
        icon: "icon-drop",
        badge: {
          variant: "info",
          text: "NEW"
        }
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
