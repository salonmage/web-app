import React from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { useTranslation } from "react-i18next";

function AddService() {
  const { t } = useTranslation();

  return (
    <>
      <Form method="POST">
        <FormGroup>
          <Label for="name">{t("Tên dịch vụ")}</Label>
          <Input type="text" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Thời gian phục vụ")}</Label>
          <Input type="text" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Giá dịch vụ")}</Label>
          <Input type="text" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Thông tin chi tiết")}</Label>
          <Input type="textarea" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Các bước thực hiện")}</Label>
          <Input type="text" />
          <Alert color="info" isOpen={true} toggle={() => console.log(1)}>
            1. Rửa mặt
          </Alert>
          <Alert color="info" isOpen={true} toggle={() => console.log(1)}>
            2. Tẩy da chết
          </Alert>
        </FormGroup>

        <FormGroup>
          <Button color="primary">{t("Save Changes")}</Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default AddService;
