import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

function GeneralInformation() {
  const { t } = useTranslation();

  return (
    <>
      <Form method="POST">
        <FormGroup>
          <Label for="name">{t("Tên cửa hàng")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Chủ cửa hàng")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Email")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("SĐT")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Facebook")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Button color="primary">{t("Save Changes")}</Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default GeneralInformation;
