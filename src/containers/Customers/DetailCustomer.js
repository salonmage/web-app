import React from "react";
import CustomerInformation from "./CustomerInformation";
import MedicalExamination from "./MedicalExamination";
import Treatment from "./Treatment";
import ListImageCustomer from "./ListImageCustomer";
import RegisterService from "./RegisterService";

function DetailCustomer() {
  return (
    <>
      <CustomerInformation />
      <MedicalExamination />
      <RegisterService />
      <Treatment />
      <ListImageCustomer />
      <div style={{ marginBottom: "50px" }} />
    </>
  );
}

export default DetailCustomer;
