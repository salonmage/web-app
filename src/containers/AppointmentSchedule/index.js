import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from "reactstrap";

const localizer = momentLocalizer(moment);
const myEventsInit = [];

function AppointmentSchedule() {
  const [modal, setModal] = useState(false);
  const [backdrop] = useState(true);
  const [events, setEvents] = useState(myEventsInit);
  const [eventSelect, setEventSelect] = useState(null);
  const [title, setTitle] = useState("");

  function toggle() {
    setModal(!modal);
  }

  function handleSelectSlot(e) {
    const event = {
      start: e.start,
      end: e.end
    };
    setEventSelect(event);
    setModal(true);
  }

  function handleAddEvent() {
    let eventSelectWithText = eventSelect;
    eventSelectWithText.title = title;
    setEvents(events => events.concat([eventSelectWithText]));
    setEventSelect(null);
    setTitle("");
    setModal(false);
  }

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        style={{ height: "50vh" }}
        onSelectSlot={handleSelectSlot}
        selectable={true}
        onSelectEvent={e => console.log(e)}
      />
      <Modal isOpen={modal} toggle={toggle} backdrop={backdrop}>
        <ModalHeader toggle={toggle}>Đặt lịch</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddEvent}>
            Save changes
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
