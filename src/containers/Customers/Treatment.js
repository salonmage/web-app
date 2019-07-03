import React, { useState } from "react";
import {
  Button,
  Table,
  CustomInput,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

function Treatment() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <h2>{t("Phác đồ điều trị")}</h2>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 1 })}
            onClick={() => setActiveTab(1)}
          >
            Standard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 2 })}
            onClick={() => setActiveTab(2)}
          >
            Triệt lông
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={1}>
          <Standard />
        </TabPane>
        <TabPane tabId={2}>
          <Waxxing />
        </TabPane>
      </TabContent>
    </>
  );
}

function Waxxing() {
  const { t } = useTranslation();
  const data1 = [
    "Nách",
    "Mép",
    "1/2 chân",
    "full chân",
    "1/2 tay",
    "full tay",
    "bikini",
    "vùng khác"
  ];
  return (
    <>
      <Table hover responsive className="table-outline">
        <thead className="thead-light">
          <tr>
            <th />
            <th>{t("Lần 1")}</th>
            <th>{t("Lần 2")}</th>
            <th>{t("Lần 3")}</th>
            <th>{t("Lần 4")}</th>
            <th>{t("Lần 5")}</th>
            <th>{t("Lần 6")}</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item}</td>
                <td>
                  <CustomInput type="checkbox" inline id={`names1${index}`} />
                </td>
                <td>
                  <CustomInput type="checkbox" inline id={`names2${index}`} />
                </td>
                <td>
                  <CustomInput type="checkbox" inline id={`names3${index}`} />
                </td>
                <td>
                  <CustomInput type="checkbox" inline id={`names4${index}`} />
                </td>
                <td>
                  <CustomInput type="checkbox" inline id={`names5${index}`} />
                </td>
                <td>
                  <CustomInput type="checkbox" inline id={`names6${index}`} />
                </td>
              </tr>
            );
          })}
          <tr>
            <td />
            <td>
              <Button color="primary">Hoàn thành</Button>
            </td>
            <td>
              <Button color="primary">Hoàn thành</Button>
            </td>
            <td>
              <Button color="primary">Hoàn thành</Button>
            </td>
            <td>
              <Button color="primary">Hoàn thành</Button>
            </td>
            <td>
              <Button color="primary">Hoàn thành</Button>
            </td>
            <td>
              <Button color="primary">Hoàn thành</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

function Standard() {
  const { t } = useTranslation();
  const data = [
    "Tẩy trang",
    "Rửa mặt",
    "Tẩy da chết",
    "Xông hơi",
    "Lấy nhân mụn",
    "Massage mặt",
    "Chiếu đèn led",
    "Phương pháp trị liệu",
    "Đắp mask",
    "Toner",
    "Kem dưỡng",
    "Kem chống nắng"
  ];
  return (
    <>
      <Table hover responsive className="table-outline">
        <thead className="thead-light">
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
          {data.map((item, index) => {
            if (index === 7) {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td>
                    <CustomInput type="checkbox" label="IPL" id="ipl1" />
                    <CustomInput type="checkbox" label="PRP" id="prp1" />
                  </td>
                  <td>
                    <CustomInput type="checkbox" label="IPL" id="ipl2" />
                    <CustomInput type="checkbox" label="PRP" id="prp2" />
                  </td>
                  <td>
                    <CustomInput type="checkbox" label="IPL" id="ipl3" />
                    <CustomInput type="checkbox" label="PRP" id="prp3" />
                  </td>
                  <td>
                    <CustomInput type="checkbox" label="IPL" id="ipl4" />
                    <CustomInput type="checkbox" label="PRP" id="prp4" />
                  </td>
                  <td>
                    <CustomInput type="checkbox" label="IPL" id="ipl5" />
                    <CustomInput type="checkbox" label="PRP" id="prp5" />
                  </td>
                </tr>
              );
            }
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
                <td>
                  <CustomInput type="checkbox" inline id={`name1${index}`} />
                </td>
                <td>
                  <CustomInput type="checkbox" inline id={`name2${index}`} />
                </td>
                <td>
                  <CustomInput type="checkbox" inline id={`name3${index}`} />
                </td>
                <td>
                  <CustomInput type="checkbox" inline id={`name4${index}`} />
                </td>
                <td>
                  <CustomInput type="checkbox" inline id={`name5${index}`} />
                </td>
              </tr>
            );
          })}
          <tr>
            <td />
            <td />
            <td>
              <Button color="primary">Hoàn thành</Button>
            </td>
            <td>
              <Button color="primary">Hoàn thành</Button>
            </td>
            <td>
              <Button color="primary">Hoàn thành</Button>
            </td>
            <td>
              <Button color="primary">Hoàn thành</Button>
            </td>
            <td>
              <Button color="primary">Hoàn thành</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Treatment;
