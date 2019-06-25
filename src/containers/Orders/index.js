import React from "react";
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Input,
  Button
} from "reactstrap";
import { useTranslation } from "react-i18next";
import img from "../../assets/img/2.jpg";

function Orders() {
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>{t("Khách hàng")}</CardTitle>
              <CardSubtitle>
                <Input type="text" placeholder={t("Tìm khách")} />
              </CardSubtitle>
              <CardText>
                <div>Họ và tên: Bùi Văn Hữu</div>
                <div>SĐT: 0337639659</div>
              </CardText>
            </CardBody>
          </Card>

          <Table bordered responsive>
            <thead>
              <tr>
                <th>{t("Sản phẩm")}</th>
                <th>{t("Số lượng")}</th>
                <th>{t("Nhân viên")}</th>
                <th>{t("Thành tiền")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chăm sóc da cơ bản</td>
                <td>1</td>
                <td>Hoa</td>
                <td>100.000</td>
              </tr>
            </tbody>
          </Table>
          <Button color="primary">Thanh toán</Button>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>{t("Danh sách sản phẩm")}</CardTitle>
              <CardSubtitle>
                <Input type="text" placeholder={t("Tìm kiếm sản phẩm")} />
              </CardSubtitle>
              <CardText>
                <div className="media ordersMedia">
                  <img src={img} className="mr-3" alt="" width="100" height="100" />
                  <div className="media-body">
                    <h5 className="mt-0">Chăm sóc da cơ bản</h5>
                    <div>140.000</div>
                  </div>
                </div>
                <div className="media ordersMedia">
                  <img src={img} className="mr-3" alt="" width="100" height="100" />
                  <div className="media-body">
                    <h5 className="mt-0">Chăm sóc da cơ bản</h5>
                    <div>140.000</div>
                  </div>
                </div>
                <div className="media ordersMedia">
                  <img src={img} className="mr-3" alt="" width="100" height="100" />
                  <div className="media-body">
                    <h5 className="mt-0">Chăm sóc da cơ bản</h5>
                    <div>140.000</div>
                  </div>
                </div>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Orders;
