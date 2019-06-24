import React from "react";
import { Table, Form, FormGroup, Input, Label, CustomInput } from "reactstrap";
import { useTranslation } from "react-i18next";

const TreatmentRegiment = () => {
  const { t } = useTranslation();

  return (
    <>
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
          <Label for="name">{t("Mã khách hàng")}</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder={t("Mã khách hàng")}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">{t("Loại da")}</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Da dầu</option>
            <option>Da khô</option>
            <option>Da hỗn hợp</option>
          </Input>
        </FormGroup>
      </Form>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th className="text-center">{t("Số")}</th>
            <th className="text-center">{t("Bước")}</th>
            <th className="text-center">{t("Lần 1")}</th>
            <th className="text-center">{t("Lần 2")}</th>
            <th className="text-center">{t("Lần 3")}</th>
            <th className="text-center">{t("Lần 4")}</th>
            <th className="text-center">{t("Lần 5")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="text-center">
              1
            </th>
            <td>{t("Tẩy trang")}</td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label=""
                />
              </FormGroup>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-center">
              1
            </th>
            <td>{t("Rửa mặt")}</td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label=""
                />
              </FormGroup>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-center">
              2
            </th>
            <td>{t("Tẩy da chết")}</td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label=""
                />
              </FormGroup>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-center">
              3
            </th>
            <td>{t("Xông hơi")}</td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label=""
                />
              </FormGroup>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-center">
              4
            </th>
            <td>{t("Lấy nhân mụn")}</td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label=""
                />
              </FormGroup>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-center">
              5
            </th>
            <td>{t("Massage mặt")}</td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label=""
                />
              </FormGroup>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-center">
              6
            </th>
            <td>{t("Phương pháp trị liệu")}</td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label=""
                />
              </FormGroup>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-center">
              7
            </th>
            <td>{t("Đắp mask")}</td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label=""
                />
              </FormGroup>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-center">
              8
            </th>
            <td>{t("Toner")}</td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label=""
                />
              </FormGroup>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-center">
              9
            </th>
            <td>{t("Kem dưỡng")}</td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label=""
                />
              </FormGroup>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-center">
              10
            </th>
            <td>{t("kem chống nắng")}</td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox5"
                  label=""
                />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox6"
                  label=""
                />
              </FormGroup>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-center" colSpan="2">
              {t("KTV làm")}
            </th>
            <td className="text-center">
              <FormGroup>
                <Input type="text" />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <Input type="text" />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <Input type="text" />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <Input type="text" />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <Input type="text" />
              </FormGroup>
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-center" colSpan="2">
              {t("Năng lượng IPL")}
            </th>
            <td className="text-center">
              <FormGroup>
                <Input type="text" />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <Input type="text" />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <Input type="text" />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <Input type="text" />
              </FormGroup>
            </td>
            <td className="text-center">
              <FormGroup>
                <Input type="text" />
              </FormGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TreatmentRegiment;
