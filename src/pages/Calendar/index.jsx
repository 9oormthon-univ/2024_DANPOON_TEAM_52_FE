import React, { useState } from "react"
import CalendarComponent from "../../components/Calendar/CalendarComponent"
import ModalComponent from "../../components/Calendar/ModalComponent"
import EventDetails from "../../components/Calendar/EventDetails"
import { StyledCalendarWrapper } from "./styled"
import BaseLayout from "../../components/BaseLayout"
import { useDateFunc } from "../../hooks/useDateFunc"
const CalendarPage = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: null,
    endDate: null,
  })
  const {
    date,
    selectedDate,
    setDate,
    setSelectedDate,
    handleSaveEvent,
    renderDotsForDate,
    events,
    questData
  } = useDateFunc()

  return (
    <BaseLayout>
      <StyledCalendarWrapper>
        <CalendarComponent
          date={date}
          onDateChange={setDate}
          onDayClick={(clickedDate) => {
            setSelectedDate(clickedDate.toISOString().split("T")[0])
            setShowDetails(true)
          }}
          activeStartDate={date}
          onActiveStartDateChange={setDate}
          renderDotsForDate={renderDotsForDate}
        />
        <ModalComponent
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          newEvent={newEvent}
          onTitleChange={(title) => setNewEvent({ ...newEvent, title })}
          onStartDateChange={(date, dateString) =>
            setNewEvent({ ...newEvent, startDate: dateString })
          }
          onEndDateChange={(date, dateString) =>
            setNewEvent({ ...newEvent, endDate: dateString })
          }
          onSave={() => {
            handleSaveEvent(newEvent)
          }}
        />
        {showDetails && (
          <EventDetails
            key={selectedDate}
            selectedDate={selectedDate}
            events={events}
            questData={questData}
            onClose={() => setShowDetails(false)}
          />
        )}
      </StyledCalendarWrapper>
    </BaseLayout>
  )
}

export default CalendarPage
