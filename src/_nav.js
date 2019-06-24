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
        name: t('QL sản phẩm'),
        icon: 'icon-note',
        children: [
          {
            name: t('Thêm sản phẩm'),
            url: '/them-san-pham',
          },
          {
            name: t('DS sản phẩm'),
            url: '/danh-sach-san-pham',
          }
        ]
      },
      {
        name: t('QL dịch vụ'),
        icon: 'icon-note',
        children: [
          {
            name: t('Thêm dịch vụ'),
            url: '/them-dich-vu',
          },
          {
            name: t('DS dịch vụ'),
            url: '/danh-sach-dich-vu'
          }
        ]
      },
      {
        name: t('Lịch hẹn'),
        icon: 'icon-note',
        url: '/lich-hen'
      },
      {
        name: t('Thu ngân'),
        icon: 'icon-note',
        url: '/thu-ngan'
      },
      {
        name: t('DS hóa đơn'),
        icon: 'icon-note',
        url: '/danh-sach-hoa-don'
      },
      {
        name: t('Báo cáo'),
        icon: 'icon-note',
        url: '/bao-cao-theo-ngay'
      },
      {
        name: t('Hoa hồng'),
        icon: 'icon-note',
        url: '/hoa-hong-nhan-vien'
      },
      {
        name: t('Xuất nhập kho'),
        icon: 'icon-note',
        url: '/nhap-xuat-kho-hang'
      },
      {
        name: t('Thông tin chung'),
        icon: 'icon-note',
        url: '/thong-tin-chung'
      },
      {
        name: t('Quản lý chi nhánh'),
        icon: 'icon-note',
        url: '/quan-ly-chi-nhanh'
      },
      {
        name: t('Quản lý tồn kho'),
        icon: 'icon-note',
        url: '/quan-ly-ton-kho'
      },
      {
        name: t('Thẻ thành viên'),
        icon: 'icon-note',
        url: '/the-thanh-vien'
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
