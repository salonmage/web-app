import React from "react";
import { Table, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

function Commission() {
  const { t } = useTranslation();
  return (
    <>
      <Input type="text" placeholder={t("Tìm kiếm nhân viên")} />
      <br />
      <Table bordered responsive>
        <thead>
          <tr>
            <th>{t("Nhân viên")}</th>
            <th>{t("Chấm điểm dịch vụ")}</th>
            <th>{t("Doanh số tư vấn")}</th>
            <th>{t("Hoa hồng tư vấn")}</th>
            <th>{t("Doanh số dịch vụ")}</th>
            <th>{t("Hoa hồng dịch vụ")}</th>
            <th>{t("Doanh số sản phẩm")}</th>
            <th>{t("Hoa hồng sản phẩm")}</th>
            <th>{t("Tổng hoa hồng")}</th>
          </tr>
        </thead>
        <tbody />
      </Table>
    </>
  );
}

export default Commission;
