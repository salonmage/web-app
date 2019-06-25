import React from "react";
import { Table, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

function MemberCard() {
  const { t } = useTranslation();
  return (
    <>
      <Input type="text" placeholder={t('Tìm kiếm khách hàng')} />
      <br />
      <Table bordered responsive>
        <thead>
          <tr>
            <th>{t("Khách hàng")}</th>
            <th>{t("Tên thẻ")}</th>
            <th>{t("Ngày cấp")}</th>
            <th>{t("Hết hạn")}</th>
            <th>{t("Lần sử dụng")}</th>
            <th>{t("Số tiền còn lại")}</th>
            <th>{t("Tình trạng")}</th>
            <th />
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    </>
  );
}

export default MemberCard;
