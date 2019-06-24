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
      },
      {
        name: t('Lịch hẹn'),
        icon: 'icon-note',
      },
      {
        name: t('Thu ngân'),
        icon: 'icon-note',
      },
      {
        name: t('DS hóa đơn'),
        icon: 'icon-note',
      },
      {
        name: t('Báo cáo theo ngày'),
        icon: 'icon-note',
      },
      {
        name: t('Hoa hồng nhân viên'),
        icon: 'icon-note',
      },
      {
        name: t('Nhập xuất kho hàng'),
        icon: 'icon-note',
      },
      {
        name: t('Thông tin chung'),
        icon: 'icon-note',
        url: '/thong-tin-chung'
      },
      {
        name: t('Quản lý chi nhánh'),
        icon: 'icon-note',
      },
      {
        name: t('DS dịch vụ'),
        icon: 'icon-note',
      },
      {
        name: t('DS sản phẩm'),
        icon: 'icon-note',
      },
      {
        name: t('Quản lý tồn kho'),
        icon: 'icon-note',
      },
      {
        name: t('Hoa hồng nhân viên'),
        icon: 'icon-note',
      },
      {
        name: t('Thẻ thành viên'),
        icon: 'icon-note',
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
