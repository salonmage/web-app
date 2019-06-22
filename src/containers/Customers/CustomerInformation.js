import React from "react";
import { Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CustomerInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("Hồ sơ khách hàng")}</h1>
      <Row>
        <Col xs="3" sm="2">
          <label htmlFor="">{t("Họ tên")}:</label>
        </Col>
        <Col>
          <span>Bùi Văn Hữu</span>
        </Col>
      </Row>
      <Row>
        <Col xs="3" sm="2">
          <label htmlFor="">{t("SĐT")}:</label>
        </Col>
        <Col>
          <span>0337639659</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to='/chi-tiet'>{t('Bệnh án')}</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to='/phac-do-dieu-tri'>{t('Phác đồ điều trị')}</Link>
        </Col>
      </Row>
    </>
  );
};

export default CustomerInformation;
