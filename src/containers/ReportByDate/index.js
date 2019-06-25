import React from "react";
import { Row, Col } from "reactstrap";

function ReportByDate() {
  return (
    <>
      <Row>
        <Col>
          <div className="alert alert-secondary" role="alert">Tổng tiền đã thu: 10.000.000</div>
          <div className="alert alert-secondary" role="alert">Nợ phải thu: 10.000.000</div>
          <div className="alert alert-secondary" role="alert">Doanh thu tiền mặt: 10.000.000</div>
          <div className="alert alert-secondary" role="alert">Tổng đơn hàng: 10.000.000</div>
          <div className="alert alert-secondary" role="alert">Tổng chi: 10.000.000</div>
        </Col>
      </Row>
    </>
  );
}

export default ReportByDate;
