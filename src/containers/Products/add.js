import React from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useTranslation } from "react-i18next";

function ProductAdd() {
  const { t } = useTranslation();

  return (
    <>
      <Form method="POST">
        <FormGroup>
          <Label for="name">{t("Tên sản phẩm")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Nhãn hiệu")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Giá bán")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Giá nhập vào")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Số lượng")}</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Thông tin chi tiết")}</Label>
          <Input type="textarea" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Ảnh sản phẩm")}</Label>
          <Input type="file" name="name" id="name" />
        </FormGroup>

        <FormGroup>
          <Button color="primary">{t("Save Changes")}</Button>
        </FormGroup>
      </Form>
    </>
  )
}

export default ProductAdd