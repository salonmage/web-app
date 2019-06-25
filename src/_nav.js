import { useTranslation } from "react-i18next";
import routesMap from './common/routesMap'

const navStaff = (t) => {
  return {
    items: [
      {
        name: t('QL khách hàng'),
        icon: 'cui-dashboard',
        children: [
          {
            name: t('Thêm khách hàng'),
            url: routesMap.addCustomer,
          },
          {
            name: t('DS khách hàng'),
            url: routesMap.listCustomer,
          },
          {
            name: t('Thẻ thành viên'),
            url: routesMap.memberCard
          }
        ],
      },
      {
        name: t('QL nhân viên'),
        icon: 'icon-user',
        children: [
          {
            name: t('Thêm nhân viên'),
            url: routesMap.addEmployees,
          },
          {
            name: t('DS nhân viên'),
            url: routesMap.listEmployees,
          },
          {
            name: t('Hoa hồng'),
            url: routesMap.commission
          }
        ],
      },
      {
        name: t('QL sản phẩm'),
        icon: 'icon-tag',
        children: [
          {
            name: t('Thêm sản phẩm'),
            url: routesMap.addProduct,
          },
          {
            name: t('DS sản phẩm'),
            url: routesMap.listProduct,
          },
          {
            name: t('Xuất nhập kho'),
            url: routesMap.inboundOutbound
          },
          {
            name: t('Tồn kho'),
            url: routesMap.inventoryManagement
          }
        ]
      },
      {
        name: t('QL dịch vụ'),
        icon: 'icon-globe',
        children: [
          {
            name: t('Thêm dịch vụ'),
            url: routesMap.addService,
          },
          {
            name: t('DS dịch vụ'),
            url: routesMap.listService
          }
        ]
      },
      {
        name: t('Thu ngân'),
        icon: 'cui-dollar',
        children: [
          {
            name: t('Thêm hóa đơn'),
            url: routesMap.addOrder,
          },
          {
            name: t('DS hóa đơn'),
            url: routesMap.listOrder
          }
        ]
      },
      {
        name: t('Đặt lịch'),
        icon: 'icon-calendar',
        url: routesMap.appointmentSchedule
      },
      {
        name: t('Báo cáo'),
        icon: 'icon-note',
        url: routesMap.reportByDay
      },
      {
        name: t('Thông tin chung'),
        icon: 'icon-home',
        url: routesMap.generalInformation
      },
      {
        name: t('Quản lý chi nhánh'),
        icon: 'icon-location-pin',
        url: routesMap.branchManagement
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
