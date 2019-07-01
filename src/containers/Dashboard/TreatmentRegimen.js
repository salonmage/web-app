import React from "react";
import CustomerInformation from "./CustomerInformation";
import MedicalExamination from "./MedicalExamination";
import Treatment from "./Treatment";
import ListImageCustomer from "./ListImageCustomer";

function TreatmentRegimen() {
  return (
    <>
      <CustomerInformation />
      <MedicalExamination />
      <Treatment />
      <ListImageCustomer />
      <div style={{ marginBottom: "50px" }} />
    </>
  );
}

export default TreatmentRegimen;
