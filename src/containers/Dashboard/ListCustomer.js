import React from "react";
import {
  Input,
  Card,
  Button,
  CardTitle,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  FormGroup
} from "reactstrap";
import { useTranslation } from "react-i18next";
import routesMap from "../../common/routesMap";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../redux/users/actions";
import { getValueOfAttribute } from "../../common/utils";
import { get } from "lodash";

export default withRouter(ListCustomer);

function ListCustomer(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);

  const users = useSelector(state => state.users);

  return (
    <>
      <Card body>
        <CardTitle>{t("Danh sách khách hàng")}</CardTitle>
        <Row form>
          <Col md="8">
            <FormGroup>
              <Input
                type="text"
                placeholder={t("Tìm kiếm khách hàng")}
                className="sbtInputSearch"
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Button
                onClick={() => props.history.push(routesMap.addCustomer)}
                color="primary"
              >
                Thêm
              </Button>
            </FormGroup>
          </Col>
        </Row>

        <ListGroup>
          {users.map(user => {
            const fullname = get(
              getValueOfAttribute(user.attributes, "fullname"),
              "text",
              ""
            );
            return (
              <ListGroupItem
                key={user.id}
                className="sbtLink"
                onClick={() =>
                  props.history.push(`${routesMap.detailCustomer}/${user.id}`)
                }
              >
                <span>{fullname}</span>{" "}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Card>
    </>
  );
}
