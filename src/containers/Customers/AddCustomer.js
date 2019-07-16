import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import routesMap from "../../common/routesMap";
import { useDispatch } from "react-redux";
import moment from "moment";
import { addUser } from "../../redux/users/actions";
import useEvent from "../../hooks/useEvent";
import { ADD_USER_SUCCESS, ADD_USER_FAIL } from "../../redux/users/types";
import { get } from "lodash";

function AddCustomer(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function handleAddUser(e) {
    e.preventDefault();
    setError("");
    const payload = {
      attributes: [
        {
          key: "birthday",
          text: moment(birthday).format("X")
        },
        {
          key: "fullName",
          text: fullName
        },
        {
          key: "gender",
          number: gender
        },
        {
          key: "address",
          text: address
        },
        {
          key: "job",
          text: job
        },
        {
          key: "phone",
          text: phone
        },
        {
          key: "email",
          text: email
        }
      ]
    };
    dispatch(addUser(payload));
  }

  useEvent(ADD_USER_SUCCESS, () => {
    props.history.push(routesMap.dashboard);
  });

  const [error, setError] = React.useState("");
  useEvent(ADD_USER_FAIL, errors => {
    setError(get(errors, "response.data.description", ""));
  });

  const [birthday, setBirthday] = useState(() => new Date());
  function handleChangeBirthday(birthday) {
    setBirthday(birthday);
  }

  const [fullName, setFullName] = React.useState("");
  function handleChangeFullName(e) {
    setFullName(e.target.value);
  }

  const [gender, setGender] = React.useState(0);
  function handleChangeGender(gender) {
    setGender(gender);
  }

  const [address, setAddress] = React.useState("");
  function handleChangeAddress(e) {
    setAddress(e.target.value);
  }

  const [job, setJob] = React.useState("");
  function handleChangeJob(e) {
    setJob(e.target.value);
  }

  const [phone, setPhone] = React.useState("");
  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  const [email, setEmail] = React.useState("");
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <h1>{t("Thêm khách hàng")}</h1>
      {error && <p className="alert alert-danger">{error}</p>}
      <Form onSubmit={handleAddUser}>
        <FormGroup>
          <Label for="name">{t("Họ và tên")}</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder={t("Họ và tên")}
            value={fullName}
            onChange={handleChangeFullName}
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
                value={0}
                checked={gender === 0}
                onChange={() => handleChangeGender(0)}
              />
              <CustomInput
                type="radio"
                name="gender"
                label="Nữ"
                inline
                id="gender1"
                value={1}
                checked={gender === 1}
                onChange={() => handleChangeGender(1)}
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
          <Input
            type="text"
            name="name"
            id="name"
            placeholder={t("Địa chỉ")}
            value={address}
            onChange={handleChangeAddress}
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Nghề nghiệp")}</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder={t("Nghề nghiệp")}
            value={job}
            onChange={handleChangeJob}
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("SĐT")}</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder={t("SĐT")}
            value={phone}
            onChange={handleChangePhone}
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">{t("Email")}</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder={t("Email")}
            value={email}
            onChange={handleChangeEmail}
          />
        </FormGroup>

        <FormGroup>
          <Button color="primary">{t("Save Changes")}</Button>
        </FormGroup>
      </Form>
    </>
  );
}

export default AddCustomer;
