import React from "react";
import {
  Row,
  Col,
  Toast,
  ToastBody,
  ToastHeader,
  Button,
  Input
} from "reactstrap";
import { useTranslation } from "react-i18next";
import Modals from "../../components/Modals";
import useFormInput from "../../hooks/useFormInput";

function RegisterService() {
  const { t } = useTranslation();
  const quantity = useFormInput("");

  function handleSubmitModal() {
    console.log(quantity.value);
  }

  return (
    <>
      <Row className="RegisterService">
        <Col lg="3">
          <h4>{t("Danh sách dịch vụ")}</h4>
          <Input type="text" placeholder={t("Tìm kiếm dịch vụ")} />
          <Toast className="toast">
            <ToastHeader>Chăm sóc da mặt</ToastHeader>
            <ToastBody>
              <div className="alert alert-primary">Giá: 150.000 vnd</div>
              <Modals
                title={t("Đăng ký dịch vụ")}
                handleSubmitModal={handleSubmitModal}
                openModalTemplate={<Button color="primary">{t("Đăng ký")}</Button>}
              >
                <Input
                  type="text"
                  placeholder={t("Nhập số lượng")}
                  {...quantity}
                />
              </Modals>
            </ToastBody>
          </Toast>
        </Col>
        <Col lg="3">
          <h4>{t("Dịch vụ đã đăng ký")}</h4>
          <Toast className="toast">
            <ToastHeader>Chăm sóc da mặt</ToastHeader>
            <ToastBody>
              <div className="alert alert-primary">
                <div>Giá: 150.000 vnd</div>
                <div>Số lần: 5</div>
              </div>
              <Modals
                handleSubmitModal={handleSubmitModal}
                openModalTemplate={
                  <Button color="primary">{t("Sử dụng")}</Button>
                }
              >
                <Input
                  type="text"
                  placeholder={t("Nhập số lượng")}
                  {...quantity}
                />
              </Modals>
            </ToastBody>
          </Toast>
        </Col>
        <Col lg="3">
          <h4>{t("Dịch vụ đang dùng")}</h4>
          <Toast className="toast">
            <ToastHeader>Chăm sóc da mặt</ToastHeader>
            <ToastBody>
              <div className="alert alert-primary">Giá: 150.000 vnd</div>

              <Modals
                handleSubmitModal={handleSubmitModal}
                openModalTemplate={
                  <Button color="primary">{t("Hoàn thành")}</Button>
                }
              />
            </ToastBody>
          </Toast>
        </Col>
        <Col lg="3">
          <h4>{t("Dịch vụ đã sử dụng")}</h4>
          <Toast className="toast">
            <ToastHeader>Chăm sóc da mặt</ToastHeader>
            <ToastBody>
              <div className="alert alert-primary">Giá: 150.000 vnd</div>
            </ToastBody>
          </Toast>
        </Col>
      </Row>
    </>
  );
}

export default RegisterService;
