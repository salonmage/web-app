import React, { useState } from "react";
import {
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Button,
  Modal,
  Table,
  CustomInput,
  Form
} from "reactstrap";
import { useTranslation } from "react-i18next";
import img from "../../assets/img/2.jpg";
import $ from "jquery";

function Treatment() {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  function renderCustomerInformation() {
    return (
      <>
        <h2>{t("Hồ sơ khách hàng")}</h2>
        <Row form>
          <Col>
            <div className="alert alert-secondary">
              <div>Họ tên: Nguyễn Mạnh Hưng</div>
              <div>Giới tính: nam</div>
              <div>Ngày sinh: 30/07/1990</div>
              <div>Địa chỉ: 29 ngõ 50 võng thị</div>
              <div>Số điện thoại: 0337 639 659</div>
            </div>
          </Col>
        </Row>
      </>
    );
  }

  function renderMedicalExamination() {
    return (
      <>
        <h2>{t("Thăm khám")}</h2>
        <Row form>
          <Col>
            <FormGroup>
              <Input
                type="textarea"
                rows="5"
                placeholder="Tình trạng da hiện tại"
              />
            </FormGroup>

            <FormGroup className="sbtGroup" row>
              <Col md="2" className="item">
                <Input type="select">
                  <option value="">Chọn loại da</option>
                  <option value="1">Da dầu</option>
                  <option value="2">Da khô</option>
                  <option value="3">Da hỗn hợp</option>
                </Input>
              </Col>

              <Col md="2" className="item">
                <Input type="select">
                  <option value="">Chọn loại da</option>
                  <option value="1">khỏe</option>
                  <option value="2">nhạy cảm</option>
                  <option value="3">rất nhạy cảm</option>
                </Input>
              </Col>

              <Col md="2" className="item">
                <Input type="select">
                  <option value="">Chọn loại da</option>
                  <option value="1">III</option>
                  <option value="2">IV</option>
                  <option value="3">V</option>
                </Input>
              </Col>

              <Col md="2" className="item">
                <Input type="select">
                  <option value="">Sau mụn để lại</option>
                  <option value="1">Thâm đen</option>
                  <option value="2">Thâm đỏ</option>
                  <option value="3">Hỗn hợp</option>
                </Input>
              </Col>

              <Col md="2" className="item">
                <Button onClick={() => $(".file").click()} color="primary">
                  Thêm ảnh
                </Button>
                <Input multiple className="file" type="file" hidden />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="6">
                <Input type="textarea" rows="5" placeholder="Tiền sử" />
              </Col>
              <Col md="6">
                <Input
                  type="textarea"
                  rows="5"
                  placeholder="Mong muốn khách hàng"
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Button color="primary" type="button">
                Save changes
              </Button>{" "}
              <Button color="secondary" type="button">
                Cancel
              </Button>
            </FormGroup>

            <FormGroup>
              <Label>Dịch vụ triển khai tại Sbeauty</Label>

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

                <Col md="8">
                  <div className="alert alert-secondary">
                    <FormGroup row>
                      <Label className="text-info" md="2">
                        Giá sản phẩm
                      </Label>
                      <Label md="10">150.000</Label>
                      <Label className="text-info" md="2">
                        Số lần
                      </Label>
                      <Col md="2">
                        <Input type="text" />
                      </Col>
                      <Label className="text-info" md="2">
                        Giảm giá
                      </Label>
                      <Label md="2">15%</Label>
                      <Label className="text-info" md="2">
                        Thành tiền
                      </Label>
                      <Label md="2">100.000</Label>
                    </FormGroup>
                    <FormGroup row>
                      <Label xs="12">
                        Gói dịch vụ đang được khuyến mãi 15%
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Button color="primary">Đăng ký</Button>{" "}
                      <Button onClick={toggleModal} color="success">
                        DS dịch vụ đã mua
                      </Button>
                      <Modal isOpen={modal} toggle={toggleModal} size="lg">
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
                      </Modal>
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
                      <Label className="text-info" md="2">
                        Giá sản phẩm
                      </Label>
                      <Label md="10">150.000</Label>
                      <Label className="text-info" md="2">
                        Số lượng
                      </Label>
                      <Col md="2">
                        <Input type="text" />
                      </Col>
                      <Label className="text-info" md="2">
                        Giảm giá
                      </Label>
                      <Label md="2">15%</Label>
                      <Label className="text-info" md="2">
                        Thành tiền
                      </Label>
                      <Label md="2">100.000</Label>
                    </FormGroup>
                    <FormGroup row>
                      <Label xs="12">Cách dùng</Label>
                      <Col>
                        <Input type="textarea" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label xs="12">
                        Gói dịch vụ đang được khuyến mãi 15%
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Button color="primary">Mua</Button>{" "}
                      <Button color="success">DS sản phẩm đã mua</Button>
                    </FormGroup>
                  </div>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }

  function renderTreatment() {
    const data = [
      "Tẩy trang",
      "Rửa mặt",
      "Tẩy da chết",
      "Xông hơi",
      "Lấy nhân mụn",
      "Massage mặt",
      "Chiếu đèn led",
      "Phương pháp trị liệu",
      "Đắp mask",
      "Toner",
      "Kem dưỡng",
      "Kem chống nắng"
    ];

    return (
      <>
        <h2>{t("Phác đồ điều trị")}</h2>
        <Table hover responsive className="table-outline">
          <thead className="thead-light">
            <tr>
              <th>{t("Số")}</th>
              <th>{t("Bước")}</th>
              <th>{t("Lần 1")}</th>
              <th>{t("Lần 2")}</th>
              <th>{t("Lần 3")}</th>
              <th>{t("Lần 4")}</th>
              <th>{t("Lần 5")}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              if (index === 7) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item}</td>
                    <td>
                      <CustomInput type="checkbox" label="IPL" id="ipl1" />
                      <CustomInput type="checkbox" label="PRP" id="prp1" />
                    </td>
                    <td>
                      <CustomInput type="checkbox" label="IPL" id="ipl2" />
                      <CustomInput type="checkbox" label="PRP" id="prp2" />
                    </td>
                    <td>
                      <CustomInput type="checkbox" label="IPL" id="ipl3" />
                      <CustomInput type="checkbox" label="PRP" id="prp3" />
                    </td>
                    <td>
                      <CustomInput type="checkbox" label="IPL" id="ipl4" />
                      <CustomInput type="checkbox" label="PRP" id="prp4" />
                    </td>
                    <td>
                      <CustomInput type="checkbox" label="IPL" id="ipl5" />
                      <CustomInput type="checkbox" label="PRP" id="prp5" />
                    </td>
                  </tr>
                );
              }
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td>
                    <CustomInput type="checkbox" inline id={`name1${index}`} />
                  </td>
                  <td>
                    <CustomInput type="checkbox" inline id={`name2${index}`} />
                  </td>
                  <td>
                    <CustomInput type="checkbox" inline id={`name3${index}`} />
                  </td>
                  <td>
                    <CustomInput type="checkbox" inline id={`name4${index}`} />
                  </td>
                  <td>
                    <CustomInput type="checkbox" inline id={`name5${index}`} />
                  </td>
                </tr>
              );
            })}
            <tr>
              <td />
              <td />
              <td>
                <Button color="primary">Hoàn thành</Button>
              </td>
              <td>
                <Button color="primary">Hoàn thành</Button>
              </td>
              <td>
                <Button color="primary">Hoàn thành</Button>
              </td>
              <td>
                <Button color="primary">Hoàn thành</Button>
              </td>
              <td>
                <Button color="primary">Hoàn thành</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }

  function renderListImageCustomer() {
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
              <img src={img} alt="" width="200" height="200" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Button
              color="primary"
              type="button"
              onClick={() => $(".imgNew").click()}
            >
              Thêm ảnh
            </Button>{" "}
            <Input type="file" hidden className="imgNew" />
            <Button color="primary" type="button">
              Save Changes
            </Button>
          </FormGroup>
        </Form>
      </>
    );
  }

  return (
    <>
      {renderCustomerInformation()}

      {renderMedicalExamination()}

      {renderTreatment()}

      {renderListImageCustomer()}

      <div style={{ marginBottom: "50px" }} />
    </>
  );
}

export default Treatment;
