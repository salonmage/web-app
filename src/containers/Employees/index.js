import React from "react";
import { Table, Input } from "reactstrap";
import { useTranslation } from "react-i18next";
import img from '../../assets/img/2.jpg'

function EmployeesList() {
  const { t } = useTranslation();
  return (
    <>
      <Input type="text" placeholder={t('Tìm kiếm nhân viên')} />
      <br />
      <Table bordered responsive>
        <thead>
          <tr>
            <th>{t("Ảnh")}</th>
            <th>{t("Họ tên")}</th>
            <th>{t("Điện thoại")}</th>
            <th>{t("Email")}</th>
            <th>{t("Trạng thái")}</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={img} width="50" height="50" alt="" /></td>
            <td>Bùi Văn Hữu</td>
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
