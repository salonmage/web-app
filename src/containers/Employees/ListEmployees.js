import React from "react";
import { Table, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

function ListEmployees() {
  const { t } = useTranslation();
  return (
    <>
      <Input type="text" placeholder={t("Tìm kiếm nhân viên")} className="sbtInputSearch" />
      <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
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

export default ListEmployees;
