import React from "react";
import { Table, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

function InventoryManagement() {
  const { t } = useTranslation();
  return (
    <>
      <Input type="text" placeholder={t("Tìm kiếm sản phẩm")} />
      <br />
      <Table bordered responsive>
        <thead>
          <tr>
            <th>{t("Ảnh")}</th>
            <th>{t("Sản phẩm")}</th>
            <th>{t("Số lượng")}</th>
            <th>{t("Giá nhập")}</th>
          </tr>
        </thead>
        <tbody />
      </Table>
    </>
  );
}

export default InventoryManagement;
