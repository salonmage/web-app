import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { createAccount } from "../../redux/accounts/actions";
import useEvent from "../../hooks/useEvent";
import {
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAIL
} from "../../redux/accounts/types";

function AddEmployees() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [name, setName] = React.useState("");

  function handleCreateAccount(e) {
    e.preventDefault();
    const payload = {
      fullname,
      email,
      password,
      phone,
      name
    };
    dispatch(createAccount(payload));
  }

  useEvent(CREATE_ACCOUNT_SUCCESS, () => {
    alert("Thêm nhân viên thành công");
  });

  useEvent(CREATE_ACCOUNT_FAIL, errors => {
    alert(errors.response.data.description);
  });

  return (
    <>
      <h1>{t("Thêm nhân viên")}</h1>
      <Form method="POST" onSubmit={handleCreateAccount}>
        <FormGroup>
          <Label for="name">{t("Họ và tên")}</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={fullname}
            onChange={e => setFullname(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Email")}</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Password")}</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("phone")}</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Name")}</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Button color="primary">{t("Save Changes")}</Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default AddEmployees;
