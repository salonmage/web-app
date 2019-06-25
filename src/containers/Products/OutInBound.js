import React from "react";
import { Table, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

function OutInBound() {
  const { t } = useTranslation();
  return (
    <>
      <Input type="text" placeholder={t("Tìm kiếm sản phẩm")} />
      <br />
      <Table bordered responsive>
        <thead>
          <tr>
            <th>{t("Sản phẩm")}</th>
            <th>{t("Giá bán")}</th>
            <th>{t("Giá vốn")}</th>
            <th>{t("Giá nhập bình quân")}</th>
            <th>{t("Tồn kho đầu kỳ")}</th>
            <th>{t("Tổng nhập")}</th>
            <th>{t("Tổng xuất")}</th>
            <th>{t("Tồn kho cuối kỳ")}</th>
          </tr>
        </thead>
        <tbody />
      </Table>
    </>
  );
}

export default OutInBound;
