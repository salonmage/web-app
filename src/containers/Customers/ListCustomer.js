import React from "react";
import { Row, Col, Toast, ToastBody, ToastHeader, Input } from "reactstrap";
import { useTranslation } from "react-i18next";
import img from '../../assets/img/2.jpg'

function ListCustomer() {
  const { t } = useTranslation();

  return (
    <Row>
      <Col>
        <Input type="text" placeholder={t("Tìm kiếm khách hàng")} className="sbtListCustomerSearch" />
        <Toast className="sbtListCustomer">
          <ToastBody>
            <div className="flexContainer">
              <div className="flexItem">
                <img
                  className="sbtListCustomerAvatar"
                  src={img}
                  alt=""
                />
              </div>
              <div className="flexItem">
                <div>Bui Van Huu</div>
                <div>0337 639 659 - buivanhuu2017@gmail.com</div>
                <div>29 ngo 50 Vong Thi</div>
              </div>
            </div>
          </ToastBody>
        </Toast>

        <Toast className="sbtListCustomer">
          <ToastBody>
            <div className="flexContainer">
              <div className="flexItem">
                <img
                  className="sbtListCustomerAvatar"
                  src={img}
                  alt=""
                />
              </div>
              <div className="flexItem">
                <div>Bui Van Huu</div>
                <div>0337 639 659 - buivanhuu2017@gmail.com</div>
                <div>29 ngo 50 Vong Thi</div>
              </div>
            </div>
          </ToastBody>
        </Toast>

        <Toast className="sbtListCustomer">
          <ToastBody>
            <div className="flexContainer">
              <div className="flexItem">
                <img
                  className="sbtListCustomerAvatar"
                  src={img}
                  alt=""
                />
              </div>
              <div className="flexItem">
                <div>Bui Van Huu</div>
                <div>0337 639 659 - buivanhuu2017@gmail.com</div>
                <div>29 ngo 50 Vong Thi</div>
              </div>
            </div>
          </ToastBody>
        </Toast>
      </Col>
      <Col>
        <Toast className="sbtListCustomer">
          <ToastHeader>{t("Thông tin khách hàng")}</ToastHeader>
          <ToastBody>
            <div>Ghé thăm lần cuối: 22/06/2019</div>
            <div>Xếp hạng: hạng thường</div>
            <div>Tổng số lần đến: 12</div>
            <div>Số điện thoại: 0337639659</div>
            <div>Email: buivanhuu2017@gmail.com</div>
            <div>Giới tính: Nam</div>
            <div>Facebook: facebook.com/buivanhuu2017</div>
          </ToastBody>
        </Toast>
      </Col>
      <Col>
        <Toast className="sbtListCustomer">
          <ToastHeader>{t("Ảnh khách hàng")}</ToastHeader>
          <ToastBody>
            <div>
              <img
                className="sbtListCustomerImg"
                src={img}
                alt=""
              />
            </div>
            <Input type="file" placeholder={t("Thêm ảnh")} />
          </ToastBody>
        </Toast>
      </Col>
    </Row>
  );
}

export default ListCustomer;
