import React, { useState } from "react"
import CalendarComponent from "../../components/Calendar/CalendarComponent"
import ModalComponent from "../../components/Calendar/ModalComponent"
import EventDetails from "../../components/Calendar/EventDetails"
import { StyledCalendarWrapper } from "./styled"
import BaseLayout from "../../components/BaseLayout"
import { useDateFunc } from "../../hooks/useDateFunc"
const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: null,
    endDate: null,
  })
  const {
    events,
    setEvents,
    questData,
    date,
    setDate,
    handleSaveEvent,
    renderDotsForDate,
    selectDate,
    setShowDetails,
    showDetails,
    selectedDate,
    addDate,
    onClickAddBtn
  } = useDateFunc()
  return (
    <BaseLayout>
      <StyledCalendarWrapper>
        <CalendarComponent
          date={date}
          onDateChange={setDate}
          onActiveStartDateChange={(newDate) => {
            setDate(new Date(newDate)) // 항상 Date 객체로 변환
          }}
          renderDotsForDate={renderDotsForDate}
          setIsModalOpen={setIsModalOpen}
          selectDate={selectDate}
        />
        <ModalComponent
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          newEvent={newEvent}
          onTitleChange={(title) => setNewEvent({ ...newEvent, title })}
          handleSaveEvent={handleSaveEvent}
          setIsModalOpen={setIsModalOpen}
          events={events}
          addDate={addDate}
          onClickAddBtn={onClickAddBtn}
        />
        {showDetails && (
          <EventDetails
            setShowDetails={setShowDetails}
            selectedDate={selectedDate}
            events={events}
            setEvents={setEvents}
            questData={questData}
            setShowDetail={setShowDetails}
          />
        )}
      </StyledCalendarWrapper>
    </BaseLayout>
  )
}

export default CalendarPage
