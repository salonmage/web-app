import React, { useState } from "react";
import {
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Button,
  Modal,
  Table
} from "reactstrap";
import { useTranslation } from "react-i18next";

function RegisterService() {
  const { t } = useTranslation();

  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }

  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <Label>{t("Dịch vụ triển khai tại Sbeauty")}</Label>

            <Row form>
              <Col md="4">
                <FormGroup>
                  <Input type="select">
                    <option value="">{t("Chọn dịch vụ")}</option>
                    <option value="1">Chăm sóc da mặt</option>
                    <option value="2">IPL</option>
                    <option value="3">PRP</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col md="8">
                <div className="alert alert-secondary">
                  <FormGroup row>
                    <Label className="text-info customLabel">
                      {t("Giá sản phẩm")}
                    </Label>
                    <Label md="10">150.000</Label>
                  </FormGroup>

                  <FormGroup row className="sbtGroup">
                    <Label className="text-info customLabel">
                      {t("Số lần")}
                    </Label>
                    <Col md="2">
                      <Input type="text" />
                    </Col>
                    <Label className="text-info customLabel">Giảm giá</Label>
                    <Col md="2" className="item">
                      <div className="descriptionInput">
                        <Input type="text" />
                        <span>%</span>
                      </div>
                    </Col>
                    <Col md="2" className="item">
                      <div className="descriptionInput">
                        <Input type="text" />
                        <span>$</span>
                      </div>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label className="text-info customLabel">Thành tiền</Label>
                    <Label md="10">100.000</Label>
                  </FormGroup>

                  <FormGroup row>
                    <Label xs="12">Gói dịch vụ đang được khuyến mãi 15%</Label>
                  </FormGroup>

                  <FormGroup>
                    <Button color="primary">Đăng ký</Button>
                  </FormGroup>
                </div>
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Label>Sản phẩm sử dụng tại nhà</Label>

            <Row form>
              <Col md="4">
                <FormGroup>
                  <Input type="select">
                    <option value="">Chọn sản phẩm</option>
                    <option value="1">Chăm sóc da mặt</option>
                    <option value="2">IPL</option>
                    <option value="3">PRP</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col md="8">
                <div className="alert alert-secondary">
                  <FormGroup row>
                    <Label className="text-info customLabel">
                      {t("Giá sản phẩm")}
                    </Label>
                    <Label md="10">150.000</Label>
                  </FormGroup>

                  <FormGroup row className="sbtGroup">
                    <Label className="text-info customLabel">
                      {t("Số lượng")}
                    </Label>
                    <Col md="2">
                      <Input type="text" />
                    </Col>
                    <Label className="text-info customLabel">Giảm giá</Label>
                    <Col md="2" className="item">
                      <div className="descriptionInput">
                        <Input type="text" />
                        <span>%</span>
                      </div>
                    </Col>
                    <Col md="2" className="item">
                      <div className="descriptionInput">
                        <Input type="text" />
                        <span>$</span>
                      </div>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label className="text-info customLabel">Thành tiền</Label>
                    <Label md="10">100.000</Label>
                  </FormGroup>

                  <FormGroup row>
                    <Label md="12">Cách dùng</Label>
                    <Col>
                      <Input type="textarea" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label md="12">Gói dịch vụ đang được khuyến mãi 15%</Label>
                  </FormGroup>

                  <FormGroup>
                    <Button color="primary">Mua</Button>
                  </FormGroup>
                </div>
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Button onClick={toggleModal} color="primary" type="button">
              {t("Thanh toán")}
            </Button>{" "}
            <Button color="secondary" type="button">
              {t("Cancel")}
            </Button>
            <Modal isOpen={modal} toggle={toggleModal} size="lg">
              <div
                style={{
                  padding: "10px",
                  maxHeight: "300px",
                  overflowY: "scroll"
                }}
              >
                <Table hover responsive className="table-outline">
                  <thead className="thead-light">
                    <tr>
                      <th>{t("Tên dịch vụ")}</th>
                      <th>{t("Đơn giá")}</th>
                      <th>{t("Số lượng")}</th>
                      <th>{t("Giảm giá")}</th>
                      <th>{t("Thành tiền")}</th>
                      <th>{t("Thao tác")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IPL</td>
                      <td>400.000</td>
                      <td>3</td>
                      <td>15%</td>
                      <td>1.000.000</td>
                      <td>
                        <i
                          style={{ cursor: "pointer" }}
                          className="fa fa-remove"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Row form>
                  <Col>
                    <div className="alert alert-secondary">
                      <FormGroup row>
                        <Label className="text-info customLabel">
                          {t("Tổng")}
                        </Label>
                        <Label md="2">2.000.000</Label>
                        <Label className="text-info customLabel">
                          {t("Trả trước")}
                        </Label>
                        <Col md="2">
                          <Input />
                        </Col>
                        <Label className="text-info customLabel">
                          {t("Còn lại")}
                        </Label>
                        <Label md="2">1.000.000</Label>
                      </FormGroup>
                      
                      <FormGroup>
                        <Button color="primary" type="button">
                          {t("Thanh toán")}
                        </Button>{" "}
                        <Button color="secondary" type="button">
                          {t("Cancel")}
                        </Button>
                      </FormGroup>
                    </div>
                  </Col>
                </Row>
              </div>
            </Modal>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}

export default RegisterService;
