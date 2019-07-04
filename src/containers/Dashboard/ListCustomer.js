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
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export default function ListCustomer(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
                onClick={() => dispatch(push(routesMap.addCustomer))}
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
            onClick={() => dispatch(push(`${routesMap.detailCustomer}/1`))}
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
