import { useTranslation } from "react-i18next";
import routesMap from './common/routesMap'

const navStaff = (t) => {
  return {
    items: [
      {
        name: t('QL khách hàng'),
        icon: 'icon-note',
        children: [
          {
            name: t('Thêm khách hàng'),
            url: routesMap.addCustomer,
          },
          {
            name: t('DS khách hàng'),
            url: routesMap.listCustomer,
          }
        ],
      },
      {
        name: t('QL nhân viên'),
        icon: 'icon-note',
        children: [
          {
            name: t('Thêm nhân viên'),
            url: routesMap.addEmployees,
          },
          {
            name: t('DS nhân viên'),
            url: routesMap.listEmployees,
          }
        ],
      },
      {
        name: t('QL sản phẩm'),
        icon: 'icon-note',
        children: [
          {
            name: t('Thêm sản phẩm'),
            url: routesMap.addProduct,
          },
          {
            name: t('DS sản phẩm'),
            url: routesMap.listProduct,
          }
        ]
      },
      {
        name: t('QL dịch vụ'),
        icon: 'icon-note',
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
        icon: 'icon-note',
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
        icon: 'icon-note',
        url: routesMap.appointmentSchedule
      },
      {
        name: t('Báo cáo'),
        icon: 'icon-note',
        url: routesMap.reportByDay
      },
      {
        name: t('Hoa hồng'),
        icon: 'icon-note',
        url: routesMap.commission
      },
      {
        name: t('Xuất nhập kho'),
        icon: 'icon-note',
        url: routesMap.inboundOutbound
      },
      {
        name: t('Thông tin chung'),
        icon: 'icon-note',
        url: routesMap.generalInformation
      },
      {
        name: t('Quản lý chi nhánh'),
        icon: 'icon-note',
        url: routesMap.branchManagement
      },
      {
        name: t('Quản lý tồn kho'),
        icon: 'icon-note',
        url: routesMap.inventoryManagement
      },
      {
        name: t('Thẻ thành viên'),
        icon: 'icon-note',
        url: routesMap.memberCard
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
