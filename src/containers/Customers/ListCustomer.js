import React from "react";
import { Table, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

function ListCustomer() {
  const { t } = useTranslation();

  return (
    <>
      <Input type="text" placeholder={t("Tìm kiếm khách hàng")} />
      <br />
      <Table hover responsive className="table-outline">
        <thead className="thead-light">
          <tr>
            <th>{t("Ảnh")}</th>
            <th>{t("Họ tên")}</th>
            <th>{t("Điện thoại")}</th>
            <th>{t("Email")}</th>
            <th>{t("Trạng thái")}</th>
            <th>{t("Thao tác")}</th>
          </tr>
        </thead>
        <tbody />
      </Table>
    </>
  );
}

export default ListCustomer;
