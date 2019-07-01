import React from "react";
import ListCustomer from "./ListCustomer";
import ListEmployees from "./ListEmployees";
import ListProduct from "./ListProduct";
import { Row, Col } from "reactstrap";

export default function Dashboard(props) {
  return (
    <Row>
      <Col lg="4" md="12">
        <ListCustomer />
      </Col>
      <Col lg="4" md="12">
        <ListEmployees />
      </Col>
      <Col lg="4" md="12">
        <ListProduct />
      </Col>
    </Row>
  );
}
