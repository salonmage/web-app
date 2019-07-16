import React from "react";
import { Button, Form, FormGroup, Input, Table, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import useEvent from "../../hooks/useEvent";
import { useDispatch } from "react-redux";
import { addService } from "../../redux/services/actions";
import { ADD_SERVICE_SUCCESS } from "../../redux/services/types";
import NumberFormat from "react-number-format";

function Services() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function handleAddService(e) {
    e.preventDefault();
    const payload = {
      name,
      retail_price: Number(retail_price)
    };
    dispatch(addService(payload));
  }

  const [name, setName] = React.useState("");
  function handleChangeName(e) {
    setName(e.target.value);
  }

  const [retail_price, setRetailPrice] = React.useState("");
  function handleChangeRetailPrice(values) {
    setRetailPrice(values.value);
  }

  function resetForm() {
    setName("");
    setRetailPrice("");
  }

  useEvent(ADD_SERVICE_SUCCESS, () => {
    resetForm();
  });

  return (
    <>
      <Row>
        <Col md="4">
          <Form onSubmit={handleAddService}>
            <FormGroup>
              <Input
                type="text"
                value={name}
                onChange={handleChangeName}
                placeholder={t("Tên dịch vụ")}
              />
            </FormGroup>

            <FormGroup>
              <NumberFormat
                value={retail_price}
                thousandSeparator={true}
                onValueChange={handleChangeRetailPrice}
                prefix="$"
                className="form-control"
                placeholder={t("Giá dịch vụ")}
              />
            </FormGroup>

            <FormGroup>
              <Button color="primary">{t("Save Changes")}</Button>
            </FormGroup>
          </Form>
        </Col>
        <Col md="8">
          <Input
            type="text"
            placeholder={t("Tìm kiếm dịch vụ")}
            className="sbtInputSearch"
          />
          <Table hover responsive className="table-outline">
            <thead className="thead-light">
              <tr>
                <th>{t("Tên")}</th>
                <th>{t("Giá")}</th>
                <th>{t("Tình trạng")}</th>
                <th>{t("Thao tác")}</th>
              </tr>
            </thead>
            <tbody />
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default Services;
