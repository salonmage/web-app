import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

function EmployeesAdd() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("Thêm nhân viên")}</h1>
      <Form method="POST">
        <FormGroup>
          <Label for="name">{t("Họ và tên")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("SĐT")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Email")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Ảnh nhân viên")}</Label>
          <Input type="file" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Chi nhánh")}</Label>
          <Input type="select">
            <option value="">Sbeauty1</option>
            <option value="">Sbeauty2</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Chức danh")}</Label>
          <Input type="select">
            <option value="">Sbeauty1</option>
            <option value="">Sbeauty2</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Nhóm nhân viên")}</Label>
          <Input type="select">
            <option value="">Sbeauty1</option>
            <option value="">Sbeauty2</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Button color="primary">{t("Save Changes")}</Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default EmployeesAdd;
