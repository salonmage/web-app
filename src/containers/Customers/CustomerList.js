import React from "react";
import { Table } from "reactstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function CustomerList() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("Danh sách khách hàng")}</h1>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>{t("Họ tên")}</th>
            <th>{t("SĐT")}</th>
            <th>{t("Địa chỉ")}</th>
            <th>{t("Hồ sơ")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bùi Văn Hữu</td>
            <td>0337639659</td>
            <td>29 ngõ 50 Võng Thị</td>
            <td>
              <Link to="/customer-information/1">Chi tiết</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default CustomerList;
