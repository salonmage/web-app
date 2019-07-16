import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getListComboService } from "../../redux/comboServices/actions";

function ComboServices() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getListComboService());
  }, [dispatch]);

  const comboServices = useSelector(state => state.comboServices, shallowEqual);

  return (
    <>
      <Row>
        <AddService />
        <Col md="8">
          <Input
            type="text"
            placeholder={t("Tìm kiếm dịch vụ")}
            className="sbtInputSearch"
          />
          <Table hover responsive className="table-outline">
            <thead className="thead-light">
              <tr>
                <th>{t("Tên")}</th>
                <th>{t("Giá")}</th>
                <th>{t("Tình trạng")}</th>
                <th>{t("Thao tác")}</th>
              </tr>
            </thead>
            <tbody>
              {comboServices.map(comboService => {
                return (
                  <tr key={comboService.id}>
                    <td>{comboService.name}</td>
                    <td />
                    <td />
                    <td />
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

function AddService() {
  const { t } = useTranslation();

  const [modal, setModal] = React.useState(false);
  function toggle() {
    setModal(!modal);
  }

  return (
    <Col md="4">
      <Form>
        <FormGroup row>
          <Col md="8">
            <Input type="text" placeholder={t("Tên gói dịch vụ")} />
          </Col>
          <Col md="4">
            <Button onClick={toggle} color="secondary">
              {t("Thêm DV")}
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Do Something
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </Col>
        </FormGroup>
        <FormGroup>
          <Button color="primary">{t("Save Changes")}</Button>
        </FormGroup>
      </Form>
    </Col>
  );
}

export default ComboServices;
