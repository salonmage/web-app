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

function Services(props) {
  const { t } = useTranslation();

  function renderListCustomer() {
    return (
      <Col lg="4" md="12">
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
                  onClick={() => props.history.push("/them-khach-hang")}
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
              onClick={() => props.history.push("/phac-do-dieu-tri/1")}
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
      </Col>
    );
  }

  function renderListEmployees() {
    return (
      <Col lg="4" md="12">
        <Card body>
          <CardTitle>{t("Danh sách nhân viên")}</CardTitle>
          <Input
            type="text"
            placeholder={t("Tìm kiếm nhân viên")}
            className="sbtInputSearch"
          />
          <ListGroup>
            <ListGroupItem className="sbtLink">
              <span>Nguyễn Hà</span> <span className="small-circle bg-green" />
            </ListGroupItem>
            <ListGroupItem className="sbtLink">
              <span>Nguyễn Hà</span> <span className="small-circle bg-orange" />
            </ListGroupItem>
            <ListGroupItem className="sbtLink">
              <span>Nguyễn Hà</span>
            </ListGroupItem>
            <ListGroupItem className="sbtLink">
              <span>Nguyễn Hà</span>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    );
  }

  function renderListProduct() {
    return (
      <Col lg="4" md="12">
        <Card body>
          <CardTitle>{t("Sản phẩm")}</CardTitle>
          <Input
            type="text"
            placeholder={t("Tìm kiếm sản phẩm")}
            className="sbtInputSearch"
          />
          <ListGroup>
            <ListGroupItem className="sbtLink">
              <span>Sữa rửa mặt</span>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    );
  }

  return (
    <Row>
      {renderListCustomer()}
      {renderListEmployees()}
      {renderListProduct()}
    </Row>
  );
}

export default Services;
