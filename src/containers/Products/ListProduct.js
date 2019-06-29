import React from "react";
import { Table, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

function ListProduct() {
  const { t } = useTranslation();

  return (
    <>
      <Input type="text" placeholder={t("Tìm kiếm nhân viên")} />
      <br />
      <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            <th>{t("Ảnh")}</th>
            <th>{t("Sản phẩm")}</th>
            <th>{t("Nhãn hiệu")}</th>
            <th>{t("Giá bán")}</th>
            <th>{t("Tình trạng")}</th>
            <th>{t("Thao tác")}</th>
          </tr>
        </thead>
        <tbody />
      </Table>
    </>
  );
}

export default ListProduct;
