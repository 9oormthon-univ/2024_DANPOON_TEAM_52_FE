import React, { useState } from "react"
import { StyledCalendar, AddScheduleButton} from "../../pages/Calendar/styled"

const CalendarComponent = ({
  date,
  activeStartDate,
  onActiveStartDateChange,
  renderDotsForDate,
  setIsModalOpen,
  selectDate,
  selectedDate,
  events
}) => {
  return (
    <>
    <StyledCalendar
      key={selectedDate}
      value={date}
      formatDay={(locale, date) => date.getDate()} // 숫자만 표시
      calendarType="gregory"
      showNeighboringMonth={false}
      next2Label={null}
      prev2Label={null}
      minDetail="year"
      tileContent={(date) => renderDotsForDate(date)}
      activeStartDate={activeStartDate}
      onActiveStartDateChange={onActiveStartDateChange}
      onClickDay={(date)=>{selectDate(date)}}
    />
    <AddScheduleButton onClick={()=>{setIsModalOpen(true)}}>
      +
    </AddScheduleButton>
    </>
  )
}

export default CalendarComponent

