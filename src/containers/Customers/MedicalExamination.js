import React, { useState } from "react";
import {
  Row,
  Col,
  FormGroup,
  Input,
  Button,
  Modal,
  CustomInput,
  ModalFooter
} from "reactstrap";
import { useTranslation } from "react-i18next";
import $ from "jquery";

function MedicalExamination() {
  const { t } = useTranslation();

  const [isShowEvaluate, setIsShowEvaluate] = useState(false);
  function handleShowEvaluate() {
    setIsShowEvaluate(!isShowEvaluate);
  }

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
              <Button onClick={handleShowEvaluate}>
                {t("Sau mụn để lại")}: <span>Thâm đen</span>
              </Button>
              <Modal isOpen={isShowEvaluate} toggle={handleShowEvaluate}>
                <div
                  style={{
                    padding: "10px",
                    maxHeight: "300px",
                    overflowY: "scroll"
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
                    return (
                      <div key={item}>
                        <div>1. Da mặt bạn bị những sần đỏ, mụn mủ:</div>
                        <CustomInput
                          type="checkbox"
                          label="Không bao giờ"
                          id={`evaluate1${item}`}
                        />
                        <CustomInput
                          type="checkbox"
                          label="Hiếm khi"
                          id={`evaluate2${item}`}
                        />
                        <CustomInput
                          type="checkbox"
                          label="Ít nhất tháng một lần"
                          id={`evaluate3${item}`}
                        />
                        <CustomInput
                          type="checkbox"
                          label="Ít nhất tuần một lần"
                          id={`evaluate4${item}`}
                        />
                        <div style={{ marginBottom: "10px" }} />
                      </div>
                    );
                  })}
                </div>
                <ModalFooter>
                  <Button color="primary" onClick={handleShowEvaluate}>
                    {t("Save Changes")}
                  </Button>{" "}
                  <Button color="secondary" onClick={handleShowEvaluate}>
                    {t("Cancel")}
                  </Button>
                </ModalFooter>
              </Modal>
            </Col>

            <Col md="2" className="item">
              <Button onClick={() => $(".file").click()} color="primary">
                {t("Thêm ảnh")}
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
              {t("Save Changes")}
            </Button>{" "}
            <Button color="secondary" type="button">
              {t("Cancel")}
            </Button>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}

export default MedicalExamination;
