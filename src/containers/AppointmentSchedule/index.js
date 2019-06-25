import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useTranslation } from "react-i18next";

const localizer = momentLocalizer(moment);

function AppointmentSchedule() {
  const { t } = useTranslation();
  const [events, setEvents] = useState([]);

  function handleSelectSlot(e) {
    const title = window.prompt(t("New Event name"));
    if (title) {
      const event = {
        start: e.start,
        end: e.end,
        title
      };
      setEvents(events => events.concat([event]));
    }
  }

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        style={{ height: "60vh" }}
        onSelectSlot={handleSelectSlot}
        selectable={true}
        onSelectEvent={e => console.log(e)}
      />
    </>
  );
}

export default AppointmentSchedule;
