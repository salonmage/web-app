import { useTranslation } from "react-i18next";

const navStaff = (t) => {
  return {
    items: [
      {
        name: t('QL khách hàng'),
        icon: 'icon-note',
        children: [
          {
            name: t('Thêm khách hàng'),
            url: '/add-customer',
          },
          {
            name: t('DS khách hàng'),
            url: '/list-customer',
          },
          {
            name: t('Phác đồ điều trị'),
            url: "/treatment-regimen",
          }
        ],
      },
      {
        name: t('QL nhân viên'),
        icon: 'icon-note',
        children: [
          {
            name: t('Thêm nhân viên'),
            url: '/add-employees',
          },
          {
            name: t('DS nhân viên'),
            url: '/list-employees',
          }
        ],
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
