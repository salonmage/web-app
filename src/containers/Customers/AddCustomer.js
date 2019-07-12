import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import routesMap from "../../common/routesMap";

function AddCustomer(props) {
  const { t } = useTranslation();
  const [birthday, setBirthday] = useState(() => new Date());

  function handleSubmitForm(e) {
    e.preventDefault();
  }

  function handleChangeBirthday(birthday) {
    setBirthday(birthday);
  }

  return (
    <>
      <h1>{t("Thêm khách hàng")}</h1>
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
          <FormGroup>
            <div>
              <CustomInput
                type="radio"
                name="gender"
                label="Nam"
                inline
                id="gender"
              />
              <CustomInput
                type="radio"
                name="gender"
                label="Nữ"
                inline
                defaultChecked={true}
                id="gender1"
              />
            </div>
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Ngày sinh")}</Label> <br />
          <DatePicker
            selected={birthday}
            onChange={handleChangeBirthday}
            className="form-control"
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Địa chỉ")}</Label>
          <Input type="text" name="name" id="name" placeholder={t("Địa chỉ")} />
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
          <Label for="name">{t("SĐT")}</Label>
          <Input type="text" name="name" id="name" placeholder={t("SĐT")} />
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
          <Label for="name">{t("Biết thẩm mỹ Sbeauty qua")}</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder={t("Biết thẩm mỹ Sbeauty qua")}
          />
        </FormGroup>

        <FormGroup>
          <Button
            onClick={() => props.history.push(routesMap.dashboard)}
            color="primary"
          >
            {t("Save Changes")}
          </Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default AddCustomer;
