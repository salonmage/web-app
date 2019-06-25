import React from "react";
import { Table, Input } from "reactstrap";
import { useTranslation } from "react-i18next";
import img from "../../assets/img/2.jpg";

function ListOrder() {
  const { t } = useTranslation();

  return (
    <>
      <Input type="text" placeholder={t("Tìm kiếm hóa đơn")} />
      <br />
      <Table bordered responsive>
        <thead>
          <tr>
            <th>{t("Khách hàng")}</th>
            <th>{t("Ngày tạo")}</th>
            <th>{t("Người lập")}</th>
            <th>{t("Số tiền")}</th>
            <th>{t("Còn nợ")}</th>
            <th>{t("Trạng thái")}</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={img} width="50" height="50" alt="" />
            </td>
            <td>Bùi Văn Hữu</td>
            <td>Nhân viên</td>
            <td>Nhóm 1</td>
            <td>Sbeauty1</td>
            <td>Sbeauty1</td>
            <td>
              <button className="btn btn-super-xs bg-primary">
                <i className="icon-pencil" /> Sửa
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ListOrder;
