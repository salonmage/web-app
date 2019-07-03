import React from "react";
import { Col, FormGroup, Input, Form } from "reactstrap";
import { useTranslation } from "react-i18next";
import img from "../../assets/img/2.jpg";

function ListImageCustomer() {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("Ảnh khách hàng")}</h2>
      <Form>
        <FormGroup>
          <Input type="select">
            <option value="">Ảnh lần 1</option>
            <option value="">Ảnh lần 2</option>
            <option value="">Ảnh lần 3</option>
          </Input>
        </FormGroup>
        <FormGroup row>
          <Col>
            <img
              src={img}
              alt=""
              width="200"
              height="200"
              style={{ borderRadius: "50%", cursor: "pointer" }}
            />
          </Col>
        </FormGroup>
      </Form>
    </>
  );
}

export default ListImageCustomer;
