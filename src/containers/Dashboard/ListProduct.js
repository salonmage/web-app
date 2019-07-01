import React from "react";
import { Input, Card, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import { useTranslation } from "react-i18next";

export default function ListProduct(props) {
  const { t } = useTranslation();

  return (
    <>
      <Card body>
        <CardTitle>{t("Sản phẩm")}</CardTitle>
        <Input
          type="text"
          placeholder={t("Tìm kiếm sản phẩm")}
          className="sbtInputSearch"
        />
        <ListGroup>
          <ListGroupItem className="sbtLink">
            <span>Sữa rửa mặt</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </>
  );
}
