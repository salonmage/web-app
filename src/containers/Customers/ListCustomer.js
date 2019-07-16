import React from "react";
import { Table, Input } from "reactstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../redux/users/actions";
import { get } from "lodash";

function ListCustomer() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);

  const users = useSelector(state => state.users);

  return (
    <>
      <Input type="text" placeholder={t("Tìm kiếm khách hàng")} />
      <br />
      <Table hover responsive className="table-outline">
        <thead className="thead-light">
          <tr>
            <th>{t("Họ tên")}</th>
            <th>{t("Điện thoại")}</th>
            <th>{t("Email")}</th>
            <th>{t("Thao tác")}</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{get(user, "fullName", "")}</td>
                <td>{get(user, "phone", "")}</td>
                <td>{get(user, "email", "")}</td>
                <td>
                  <i className="fas fa-edit link" />{" "}
                  <i className="fas fa-trash-alt link" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default ListCustomer;
