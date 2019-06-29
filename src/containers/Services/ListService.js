import React from "react";
import { Table, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

function ListService() {
  const { t } = useTranslation();
  return (
    <>
      <Input type="text" placeholder={t("Tìm kiếm dịch vụ")} className="sbtInputSearch" />
      <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            <th>{t("Ảnh")}</th>
            <th>{t("Tên")}</th>
            <th>{t("Giá bán")}</th>
            <th>{t("Thời gian")}</th>
            <th>{t("Tình trạng")}</th>
            <th>{t("Thao tác")}</th>
          </tr>
        </thead>
        <tbody />
      </Table>
    </>
  );
}

export default ListService;
