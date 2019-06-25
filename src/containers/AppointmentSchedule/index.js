import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const localizer = momentLocalizer(moment);

function AppointmentSchedule() {
  const myEventsList = [
    {
      start: new Date(),
      end: new Date(moment().add(1, "days")),
      title: "Some title"
    }
  ];
  const [modal, setModal] = useState(false);
  const [backdrop] = useState(true);
  function toggle() {
    setModal(!modal);
  }

  return (
    <>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        defaultView="week"
        style={{ height: "50vh" }}
        onSelectSlot={toggle}
        selectable={true}
      />
      <Modal isOpen={modal} toggle={toggle} backdrop={backdrop}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
    </>
  );
}

export default AppointmentSchedule;
