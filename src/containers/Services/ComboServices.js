import React from "react";
import { Button, Form, FormGroup, Input, Table, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getListComboService } from "../../redux/comboServices/actions";

function ComboServices() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getListComboService());
  }, [dispatch]);

  const comboServices = useSelector(state => state.comboServices, shallowEqual);

  return (
    <>
      <Row>
        <Col md="4">
          <Form>
            <FormGroup>
              <Input type="text" placeholder={t("Tên gói dịch vụ")} />
            </FormGroup>

            <FormGroup row className="sbtGroup">
              <Col md="6" className="item">
                <Input type="select">
                  <option value="">{t("Chọn dịch vụ")}</option>
                  <option value="1">Chăm sóc da mặt</option>
                  <option value="2">IPL</option>
                  <option value="3">PRP</option>
                </Input>
              </Col>
              <Col md="6" className="item">
                <Input type="text" placeholder={t("Thứ tự")} />
              </Col>
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
            <tbody>
              {comboServices.map(comboService => {
                return (
                  <tr key={comboService.id}>
                    <td>{comboService.name}</td>
                    <td />
                    <td />
                    <td />
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default ComboServices;
