import React, { useState } from "react";
import {
  Input,
  Card,
  Button,
  CardTitle,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  CustomInput
} from "reactstrap";
import classnames from "classnames";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState(4);
  const [typeModal, setTypeModal] = useState("employees");

  function toggleModal(typeModal) {
    setTypeModal(typeModal);
    setModal(!modal);
  }

  function renderRegisteredService() {
    return (
      <ListGroup flush={true} className="sbtListGroup">
        <ListGroupItem className="justify-content-between">
          <Row form>
            <Col md="4">
              <FormGroup>
                <Input type="text" value="Chăm sóc da mặt (5)" disabled />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input type="select" placeholder={t("Nhân viên")}>
                  <option value="">Chọn nhân viên</option>
                  <option value="1">Nguyễn Thu Trang</option>
                  <option value="2">Hà Hiền</option>
                  <option value="3">Thu Hương</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Button color="primary">{t("Sử dụng")}</Button>
              </FormGroup>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem className="justify-content-between">
          <Row form>
            <Col md="4">
              <FormGroup>
                <Input type="text" value="IPL (5)" disabled />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input type="select" placeholder={t("Nhân viên")}>
                  <option value="">Chọn nhân viên</option>
                  <option value="1">Nguyễn Thu Trang</option>
                  <option value="2">Hà Hiền</option>
                  <option value="3">Thu Hương</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Button color="primary">{t("Sử dụng")}</Button>
              </FormGroup>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem className="justify-content-between">
          <Row form>
            <Col md="4">
              <FormGroup>
                <Input type="text" value="PRP (3)" disabled />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input type="select" placeholder={t("Nhân viên")}>
                  <option value="">Chọn nhân viên</option>
                  <option value="1">Nguyễn Thu Trang</option>
                  <option value="2">Hà Hiền</option>
                  <option value="3">Thu Hương</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Button color="primary">{t("Sử dụng")}</Button>
              </FormGroup>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    );
  }

  function renderRegisterService() {
    return (
      <>
        <Row form>
          <Col md="4">
            <FormGroup>
              <Input type="select">
                <option value="">Chọn dịch vụ</option>
                <option value="1">Chăm sóc da mặt</option>
                <option value="2">IPL</option>
                <option value="3">PRP</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Input type="text" value="150.000" disabled />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md="2">
            <FormGroup>
              <Input type="text" placeholder={t("Số lần")} />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Input type="text" placeholder={t("Giảm giá")} />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Input type="text" placeholder={t("Trả trước")} />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Input type="text" placeholder={t("Còn lại")} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md="4">
            <FormGroup>
              <div>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomInline"
                  label="Rửa mặt"
                  inline
                  defaultChecked={true}
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomInline2"
                  label="Tẩy da chết"
                  inline
                  defaultChecked={true}
                />
              </div>
            </FormGroup>
          </Col>
        </Row>
        <div className="alert alert-primary">
          Thông tin chi tiết gói dịch vụ
        </div>
        <Row form>
          <Col md="4">
            <FormGroup>
              <Button color="primary">{t("Đăng ký")}</Button>{" "}
              <Button color="secondary">{t("Hủy bỏ")}</Button>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }

  function renderTreatment() {
    return (
      <>
        <div className="alert alert-primary">
          <div>Họ tên: Ngô Tuấn Long</div>
          <div>SDT: 0337639659</div>
        </div>
        <Row form>
          <Col xs="12">
            <FormGroup>
              <Input type="select">
                <option value="">Loại da</option>
                <option value="1">Nhạy cảm</option>
                <option value="2">Rất nhạy cảm</option>
                <option value="3">Khỏe</option>
              </Input>
            </FormGroup>
          </Col>
          <Col xs="12">
            <FormGroup>
              <Input type="textarea" rows="10" />
            </FormGroup>
          </Col>
          <Col xs="12">
            <Button color="primary">{t("Save changes")}</Button>{" "}
            <Button color="secondary">{t("Cancel")}</Button>
          </Col>
        </Row>
      </>
    );
  }

  function renderCustomer() {
    return (
      <>
        <ModalHeader toggle={toggleModal}>
          Ngô Tuấn Long - 0337639659
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md="10">
              <Form>
                <FormGroup>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t("Tìm khách hàng theo tên, email, sdt")}
                  />
                </FormGroup>
              </Form>
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === 4 })}
                      onClick={() => setActiveTab(4)}
                    >
                      {t("Phác đồ điều trị")}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === 2 })}
                      onClick={() => setActiveTab(2)}
                    >
                      {t("Đăng ký dịch vụ")}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === 1 })}
                      onClick={() => setActiveTab(1)}
                    >
                      {t("Dịch vụ đã đăng ký")}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === 3 })}
                      onClick={() => setActiveTab(3)}
                    >
                      {t("Dịch vụ đang dùng")}
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId={1}>{renderRegisteredService()}</TabPane>
                  <TabPane tabId={2}>{renderRegisterService()}</TabPane>
                  <TabPane tabId={3}>{serviceInUse()}</TabPane>
                  <TabPane tabId={4}>{renderTreatment()}</TabPane>
                </TabContent>
              </div>
            </Col>
            <Col md="2">right</Col>
          </Row>
        </ModalBody>
      </>
    );
  }

  function serviceInUse() {
    return (
      <ListGroup flush={true} className="sbtListGroup">
        <ListGroupItem className="justify-content-between">
          <Row form>
            <Col md="4">
              <FormGroup>
                <Input type="text" value="Chăm sóc da mặt" disabled />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input type="text" value="Hà Hiền" disabled />
              </FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <Button color="primary">{t("Kết thúc")}</Button>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md="4">
              <FormGroup>
                <div>
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomInline"
                    label="Rửa mặt"
                    inline
                    defaultChecked={true}
                  />
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomInline2"
                    label="Tẩy da chết"
                    inline
                    defaultChecked={true}
                  />
                </div>
              </FormGroup>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    );
  }

  function renderEmployees() {
    return <div>Nhan vien</div>;
  }

  function renderProductDetail() {
    return <div>Chi tiet san pham</div>;
  }

  return (
    <>
      <Row>
        <Col>
          <Card body>
            <CardTitle>{t("Danh sách khách hàng")}</CardTitle>
            <Input
              type="text"
              placeholder={t("Tìm kiếm khách hàng")}
              className="sbtInputSearch"
            />
            <ListGroup>
              <ListGroupItem
                className="sbtLink"
                onClick={() => toggleModal("customer")}
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
        <Col>
          <Card body>
            <CardTitle>{t("Danh sách nhân viên")}</CardTitle>
            <Input
              type="text"
              placeholder={t("Tìm kiếm nhân viên")}
              className="sbtInputSearch"
            />
            <ListGroup>
              <ListGroupItem
                className="sbtLink"
                onClick={() => toggleModal("employees")}
              >
                <span>Nguyễn Hà</span>{" "}
                <span className="small-circle bg-green" />
              </ListGroupItem>
              <ListGroupItem className="sbtLink">
                <span>Nguyễn Hà</span>{" "}
                <span className="small-circle bg-orange" />
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
        <Col>
          <Card body>
            <CardTitle>{t("Sản phẩm")}</CardTitle>
            <Input
              type="text"
              placeholder={t("Tìm kiếm sản phẩm")}
              className="sbtInputSearch"
            />
            <ListGroup>
              <ListGroupItem
                className="sbtLink"
                onClick={() => toggleModal("product")}
              >
                <span>Sữa rửa mặt</span>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        {typeModal === "customer" ? renderCustomer() : null}
        {typeModal === "employees" ? renderEmployees() : null}
        {typeModal === "product" ? renderProductDetail() : null}
      </Modal>
    </>
  );
}

export default Services;
