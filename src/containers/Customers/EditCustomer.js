import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { updateUser } from "../../redux/users/actions";
import useEvent from "../../hooks/useEvent";
import { UPDATE_USER_SUCCESS, UPDATE_USER_FAIL } from "../../redux/users/types";
import { get } from "lodash";
import { getUser } from "../../redux/user/actions";

function EditCustomer(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUser(props.match.params.customerId));
  }, [dispatch, props.match.params.customerId]);

  const user = useSelector(state => state.user);

  function handleUpdateUser(e) {
    e.preventDefault();
    setError("");
    const userId = user.id;
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
          text: gender
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
    dispatch(updateUser(userId, payload));
  }

  useEvent(UPDATE_USER_SUCCESS, () => {
    alert("Update user success");
  });

  const [error, setError] = React.useState("");
  useEvent(UPDATE_USER_FAIL, errors => {
    setError(get(errors, "response.data.description", ""));
  });

  const [birthday, setBirthday] = useState(() => new Date());
  function handleChangeBirthday(birthday) {
    setBirthday(birthday);
  }

  React.useEffect(() => {
    setFullName(get(user, "fullName", ""));
    setEmail(get(user, "email", ""));
    setGender(get(user, "gender", "female"));
    setAddress(get(user, "address", ""));
    setJob(get(user, "job", ""));
    setPhone(get(user, "phone", ""));
    setPhone(get(user, "phone", ""));
    if (get(user, "birthday", "")) {
      setBirthday(new Date(moment.unix(get(user, "birthday", ""))));
    }
  }, [user]);

  const [fullName, setFullName] = React.useState("");
  function handleChangeFullName(e) {
    setFullName(e.target.value);
  }

  const [gender, setGender] = React.useState("female");
  function handleChangeGender(e) {
    setGender(e.target.value);
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
      <Form onSubmit={handleUpdateUser}>
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
                value="male"
                checked={gender === "male"}
                onChange={handleChangeGender}
              />
              <CustomInput
                type="radio"
                name="gender"
                label="Nữ"
                inline
                id="gender1"
                value="female"
                checked={gender === "female"}
                onChange={handleChangeGender}
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

export default EditCustomer;
