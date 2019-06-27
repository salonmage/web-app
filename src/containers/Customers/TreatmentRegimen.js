import React from "react";
import { Table, CustomInput, FormGroup } from "reactstrap";
import { useTranslation } from "react-i18next";

function TreatmentRegimen() {
  const { t } = useTranslation();

  return (
    <>
      <p>{t("Họ và tên")}: Bùi Văn Hữu</p>

      <h2>{t("Chăm sóc da mặt")}</h2>
      <Table bordered responsive>
        <thead>
          <tr>
            <th>{t("Số")}</th>
            <th>{t("Bước")}</th>
            <th>{t("Lần 1")}</th>
            <th>{t("Lần 2")}</th>
            <th>{t("Lần 3")}</th>
            <th>{t("Lần 4")}</th>
            <th>{t("Lần 5")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Tẩy trang</td>
            <td>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" id="exampleCustom1" />
                </div>
              </FormGroup>
            </td>
            <td>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" id="exampleCustom2" />
                </div>
              </FormGroup>
            </td>
            <td>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" id="exampleCustom3" />
                </div>
              </FormGroup>
            </td>
            <td>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" id="exampleCustom4" />
                </div>
              </FormGroup>
            </td>
            <td>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" id="exampleCustom5" />
                </div>
              </FormGroup>
            </td>
          </tr>
        </tbody>
      </Table>

      <h2>{t("Triệt lông")}</h2>
      <Table bordered responsive>
        <thead>
          <tr>
            <th>{t("Vùng")}</th>
            <th>{t("Lần 1")}</th>
            <th>{t("Lần 2")}</th>
            <th>{t("Lần 3")}</th>
            <th>{t("Lần 4")}</th>
            <th>{t("Lần 5")}</th>
            <th>{t("Lần 6")}</th>
            <th>{t("Lần 7")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("Nách")}</td>
            <td>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" id="exampleCustomCheckbox1" />
                </div>
              </FormGroup>
            </td>
            <td>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" id="exampleCustomCheckbox2" />
                </div>
              </FormGroup>
            </td>
            <td>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" id="exampleCustomCheckbox3" />
                </div>
              </FormGroup>
            </td>
            <td>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" id="exampleCustomCheckbox4" />
                </div>
              </FormGroup>
            </td>
            <td>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" id="exampleCustomCheckbox5" />
                </div>
              </FormGroup>
            </td>
            <td>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" id="exampleCustomCheckbox6" />
                </div>
              </FormGroup>
            </td>
            <td>
              <FormGroup>
                <div>
                  <CustomInput type="checkbox" id="exampleCustomCheckbox7" />
                </div>
              </FormGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default TreatmentRegimen;
