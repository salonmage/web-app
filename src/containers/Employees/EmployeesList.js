import React from "react";
import { Table } from "reactstrap";
import { useTranslation } from "react-i18next";

function EmployeesList() {
  const { t } = useTranslation();
  return (
    <>
      <Table bordered>
        <thead>
          <tr>
            <th>{t("Ảnh")}</th>
            <th>{t("Họ tên")}</th>
            <th>{t("Chức danh")}</th>
            <th>{t("Nhóm nhân viên")}</th>
            <th>{t("Chi nhánh")}</th>
            <th>{t("Điện thoại")}</th>
            <th>{t("Email")}</th>
            <th>{t("Trạng thái")}</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Bùi Văn Hữu</td>
            <td>Nhân viên</td>
            <td>Nhóm 1</td>
            <td>Sbeauty1</td>
            <td>0337639659</td>
            <td>buivanhuu2017@gmail.com</td>
            <td>active</td>
            <td>
              <button className="btn btn-warning">{t('Sửa')}</button>
              {' '}
              <button className="btn btn-danger">{t('Xóa')}</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default EmployeesList;
