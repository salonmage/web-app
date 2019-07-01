import React from "react";
import {
  Input,
  Card,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { useTranslation } from "react-i18next";

export default function ListEmployees(props) {
  const { t } = useTranslation();

  return (
    <>
      <Card body>
        <CardTitle>{t("Danh sách nhân viên")}</CardTitle>
        <Input
          type="text"
          placeholder={t("Tìm kiếm nhân viên")}
          className="sbtInputSearch"
        />
        <ListGroup>
          <ListGroupItem className="sbtLink">
            <span>Nguyễn Hà</span> <span className="small-circle bg-green" />
          </ListGroupItem>
          <ListGroupItem className="sbtLink">
            <span>Nguyễn Hà</span> <span className="small-circle bg-orange" />
          </ListGroupItem>
          <ListGroupItem className="sbtLink">
            <span>Nguyễn Hà</span>
          </ListGroupItem>
          <ListGroupItem className="sbtLink">
            <span>Nguyễn Hà</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </>
  );
}
