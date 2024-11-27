import React, { useEffect, useState } from "react"
import CalendarComponent from "../../components/Calendar/CalendarComponent"
import ModalComponent from "../../components/Calendar/ModalComponent"
import EventDetails from "../../components/Calendar/EventDetails"
import { StyledCalendarWrapper } from "./styled"
import BaseLayout from "../../components/BaseLayout"
// 분리된 훅들 가져오기
import { useDateRange } from "../../hooks/useDateRange"
import { useEvents } from "../../hooks/useEvents"
import { useModal } from "../../hooks/useModal"
import { createSchedule } from "../../apis/calendar"

const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    date,
    setDate,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    getDatesInRange,
  } = useDateRange()
  const { renderDotsForDate } = useEvents()

  // 모달 및 UI 관리
  const {
    showDetails,
    setShowDetails,
    selectedDate,
    selectDate,
    eventsForDate,
    todo
  } = useModal()

  const handleSaveEvent = (newEvent, option) => {
    const eventDate = new Date(newEvent)
    const formattedDate = eventDate.toLocaleDateString("en-CA")

    if (option === "single") {
      setStartDate(formattedDate)
      setEndDate(formattedDate)
    } else if (option === "start") {
      setStartDate(formattedDate)
    } else if (option === "end") {
      setEndDate(formattedDate)
    }
  }

  const onClickAddBtn = (addData, ModalOpen) => {
    //setEvents((prev) => [...prev, addData]);
    createSchedule(addData)
    ModalOpen(false)
  }

  return (
    <BaseLayout>
      <StyledCalendarWrapper>
        <CalendarComponent
          date={date}
          onDateChange={setDate}
          onActiveStartDateChange={(newDate) => setDate(new Date(newDate))}
          renderDotsForDate={renderDotsForDate} // 함수 자체를 전달
          setIsModalOpen={setIsModalOpen}
          selectDate={selectDate}
        />
        <ModalComponent
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onTitleChange={(title) => setNewEvent({ title })}
          handleSaveEvent={handleSaveEvent}
          setIsModalOpen={setIsModalOpen}
          onClickAddBtn={onClickAddBtn}
          startDate={startDate}
          endDate={endDate}
        />
        {showDetails && (
          <EventDetails
            setShowDetails={setShowDetails}
            selectedDate={selectedDate}
            getDatesInRange={getDatesInRange}
            todo={todo}
          />
        )}
      </StyledCalendarWrapper>
    </BaseLayout>
  )
}

export default CalendarPage
