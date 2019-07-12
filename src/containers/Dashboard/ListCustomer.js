import React from "react";
import {
  Input,
  Card,
  Button,
  CardTitle,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  FormGroup
} from "reactstrap";
import { useTranslation } from "react-i18next";
import routesMap from "../../common/routesMap";
import { withRouter } from "react-router-dom";

export default withRouter(ListCustomer);

function ListCustomer(props) {
  const { t } = useTranslation();

  return (
    <>
      <Card body>
        <CardTitle>{t("Danh sách khách hàng")}</CardTitle>
        <Row form>
          <Col md="8">
            <FormGroup>
              <Input
                type="text"
                placeholder={t("Tìm kiếm khách hàng")}
                className="sbtInputSearch"
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Button
                onClick={() => props.history.push(routesMap.addCustomer)}
                color="primary"
              >
                Thêm
              </Button>
            </FormGroup>
          </Col>
        </Row>

        <ListGroup>
          <ListGroupItem
            className="sbtLink"
            onClick={() => props.history.push(`${routesMap.detailCustomer}/1`)}
          >
            <span>Ngô Tuấn Long</span>{" "}
            <span className="small-circle bg-green" />
          </ListGroupItem>
          <ListGroupItem className="sbtLink">
            <span>Nguyễn Mạnh Hưng</span>{" "}
            <span className="small-circle bg-orange" />
          </ListGroupItem>
          <ListGroupItem className="sbtLink">
            <span>Nguyễn Bảo Ngọc</span>{" "}
          </ListGroupItem>
        </ListGroup>
      </Card>
    </>
  );
}
