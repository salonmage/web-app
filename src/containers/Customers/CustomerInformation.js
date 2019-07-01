import React from "react";
import { Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

function CustomerInformation() {
  const { t } = useTranslation();
  
  return (
    <>
      <h2>{t("Hồ sơ khách hàng")}</h2>
      <Row form>
        <Col>
          <div className="alert alert-secondary">
            <div>{t("Họ tên")}: Nguyễn Mạnh Hưng</div>
            <div>{t("Giới tính")}: nam</div>
            <div>{t("Ngày sinh")}: 30/07/1990</div>
            <div>{t("Địa chỉ")}: 29 ngõ 50 võng thị</div>
            <div>{t("Số điện thoại")}: 0337 639 659</div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default CustomerInformation;
