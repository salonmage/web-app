import { useTranslation } from "react-i18next";
import routesMap, { parentRoutes } from "./common/routesMap";

const navStaff = t => {
  return {
    items: [
      {
        name: t("Dashboard"),
        icon: "cui-dashboard",
        url: routesMap.dashboard
      },
      {
        name: t("QL khách hàng"),
        icon: "fa fa-user-circle-o",
        url: parentRoutes.customer,
        children: [
          {
            name: t("Thêm khách hàng"),
            url: routesMap.addCustomer
          },
          {
            name: t("DS khách hàng"),
            url: routesMap.listCustomer
          }
        ]
      },
      {
        name: t("QL dịch vụ"),
        icon: "icon-globe",
        url: parentRoutes.service,
        children: [
          {
            name: t("Dịch vụ"),
            url: routesMap.service
          },
          {
            name: t("Gói dịch vụ"),
            url: routesMap.comboService
          }
        ]
      },
      {
        name: t("QL nhân viên"),
        icon: "icon-user",
        url: parentRoutes.employess,
        children: [
          {
            name: t("Thêm nhân viên"),
            url: routesMap.addEmployees
          },
          {
            name: t("DS nhân viên"),
            url: routesMap.listEmployees
          }
        ]
      },

      {
        name: t("QL sản phẩm"),
        icon: "icon-tag",
        url: parentRoutes.product,
        children: [
          {
            name: t("Thêm sản phẩm"),
            url: routesMap.addProduct
          },
          {
            name: t("DS sản phẩm"),
            url: routesMap.listProduct
          },
          {
            name: t("Xuất nhập kho"),
            url: routesMap.inboundOutbound
          },
          {
            name: t("Tồn kho"),
            url: routesMap.inventoryManagement
          }
        ]
      },
      {
        name: t("Thu ngân"),
        icon: "cui-dollar",
        url: parentRoutes.order,
        children: [
          {
            name: t("Thêm hóa đơn"),
            url: routesMap.addOrder
          },
          {
            name: t("DS hóa đơn"),
            url: routesMap.listOrder
          }
        ]
      },
      {
        name: t("Thông tin chung"),
        icon: "icon-home",
        url: routesMap.generalInformation
      },
      {
        name: t("Quản lý chi nhánh"),
        icon: "icon-location-pin",
        url: routesMap.branchManagement
      }
    ]
  };
};

const useNav = () => {
  const { t } = useTranslation();
  return navStaff(t);
};

export default useNav;
