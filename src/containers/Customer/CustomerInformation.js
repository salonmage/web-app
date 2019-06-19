import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

const CustomerInformation = () => {
  const { t } = useTranslation();

  function handleSubmitForm(e) {
    e.preventDefault();
  }

  return (
    <Row>
      <Col>
        <h1>{t("Hồ sơ khách hàng")}</h1>
        <Form method="POST" onSubmit={handleSubmitForm}>
          <FormGroup>
            <Label for="name">{t("Họ và tên")}</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder={t("Họ và tên")}
            />
          </FormGroup>

          <FormGroup>
            <Label>{t("Giới tính")}</Label>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> {t("Nam")}
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> {t("Nữ")}
              </Label>
            </FormGroup>
          </FormGroup>

          <FormGroup>
            <Label for="name">{t("Ngày sinh")}</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder={t("Ngày sinh")}
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">{t("Địa chỉ")}</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder={t("Địa chỉ")}
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">{t("Nghề nghiệp")}</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder={t("Nghề nghiệp")}
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">{t("SDT")}</Label>
            <Input type="text" name="name" id="name" placeholder={t("SDT")} />
          </FormGroup>

          <FormGroup>
            <Label for="name">{t("Email/facebook")}</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder={t("Email/facebook")}
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">{t("Ngày thăm khám")}</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder={t("Ngày thăm khám")}
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">{t("Biết thẩm mỹ Sbeauty qua")}</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder={t("Biết thẩm mỹ Sbeauty qua")}
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">{t("Tình trạng da hiện tại")}</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">{t("Loại da")}</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Da dầu</option>
              <option>Da khô</option>
              <option>Da hỗn hợp</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">{t("Tuýp da")}</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Thâm đen</option>
              <option>Thâm đỏ</option>
              <option>Hỗn hợp</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="name">{t("Tiền sử")}</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>

          <FormGroup>
            <Label for="name">{t("Mong muốn khách hàng")}</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>

          <FormGroup>
            <Label for="name">{t("Dịch vụ triển khai tại Sbeauty")}</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>

          <FormGroup>
            <Label for="name">{t("Sản phẩm sử dụng tại nhà")}</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>

          <FormGroup>
            <Button color="primary">{t("Save Changes")}</Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default CustomerInformation;
