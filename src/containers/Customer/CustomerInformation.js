import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useTranslation } from "react-i18next";

const CustomerInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("Hồ sơ khách hàng")}</h1>
      <Form>

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
              <Input type="radio" name="radio1" /> {t('Nam')}
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> {t('Nữ')}
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
          <Input
            type="text"
            name="name"
            id="name"
            placeholder={t("SDT")}
          />
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
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input
            type="select"
            name="selectMulti"
            id="exampleSelectMulti"
            multiple
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option one is this and
              that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option two can be something
              else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled /> Option three is
              disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Check me out
          </Label>
        </FormGroup>
        <Button color="primary">{t("Save Changes")}</Button>
      </Form>
    </>
  );
};

export default CustomerInformation;
