import React from "react";
import { Row, Col, Toast, ToastBody, ToastHeader, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

function CustomerList() {
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
                  src="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-1/p160x160/64777436_2202017723441733_6414231204979015680_n.jpg?_nc_cat=111&_nc_oc=AQlxyCQwQJI6ZUJv4QL5hi1yN8fG1pyGuh-jXTE7MPv6_B0J_UoDZ8qZOTitLsMt-Rw&_nc_ht=scontent.fhan5-3.fna&oh=9f5ccbe06c13c9799e3dd38e4134fa1f&oe=5D79EF89"
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
                  src="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-1/p160x160/64777436_2202017723441733_6414231204979015680_n.jpg?_nc_cat=111&_nc_oc=AQlxyCQwQJI6ZUJv4QL5hi1yN8fG1pyGuh-jXTE7MPv6_B0J_UoDZ8qZOTitLsMt-Rw&_nc_ht=scontent.fhan5-3.fna&oh=9f5ccbe06c13c9799e3dd38e4134fa1f&oe=5D79EF89"
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
                  src="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-1/p160x160/64777436_2202017723441733_6414231204979015680_n.jpg?_nc_cat=111&_nc_oc=AQlxyCQwQJI6ZUJv4QL5hi1yN8fG1pyGuh-jXTE7MPv6_B0J_UoDZ8qZOTitLsMt-Rw&_nc_ht=scontent.fhan5-3.fna&oh=9f5ccbe06c13c9799e3dd38e4134fa1f&oe=5D79EF89"
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
                src="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-1/p160x160/64777436_2202017723441733_6414231204979015680_n.jpg?_nc_cat=111&_nc_oc=AQlxyCQwQJI6ZUJv4QL5hi1yN8fG1pyGuh-jXTE7MPv6_B0J_UoDZ8qZOTitLsMt-Rw&_nc_ht=scontent.fhan5-3.fna&oh=9f5ccbe06c13c9799e3dd38e4134fa1f&oe=5D79EF89"
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

export default CustomerList;
