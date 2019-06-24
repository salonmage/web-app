import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

function AppointmentSchedule() {
  const myEventsList = [
    {
      start: new Date(),
      end: new Date(moment().add(1, "days")),
      title: "Some title"
    }
  ]

  return (
  <>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      defaultView="month"
      style={{ height: "100vh" }}
      onSelectSlot={(e) => console.log(e)}
      selectable={true}
    />
  </>
  );
}

export default AppointmentSchedule