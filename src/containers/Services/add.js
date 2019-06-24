import React from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

function AddService() {
  const { t } = useTranslation();

  return (
    <>
      <Form method="POST">
        <FormGroup>
          <Label for="name">{t("Tên dịch vụ")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Thời gian phục vụ")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Giá dịch vụ")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Thông tin chi tiết")}</Label>
          <Input type="textarea" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Button color="primary">{t("Save Changes")}</Button>
        </FormGroup>
      </Form>
    </>
  )
}

export default AddService