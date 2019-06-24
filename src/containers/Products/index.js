import React from 'react'
import { Table, Input } from "reactstrap";
import { useTranslation } from "react-i18next";
import img from '../../assets/img/2.jpg'

function Products() {
    const { t } = useTranslation();

return (
<>
  <Input type="text" placeholder={t('Tìm kiếm nhân viên')} />
  <br />
  <Table bordered responsive>
    <thead>
      <tr>
        <th>{t("Ảnh")}</th>
        <th>{t("Sản phẩm")}</th>
        <th>{t("Nhãn hiệu")}</th>
        <th>{t("Giá bán")}</th>
        <th>{t("Tình trạng")}</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img src={img} width="50" height="50" alt='' /></td>
        <td>Bùi Văn Hữu</td>
        <td>Nhân viên</td>
        <td>Nhóm 1</td>
        <td>Sbeauty1</td>
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

export default Products