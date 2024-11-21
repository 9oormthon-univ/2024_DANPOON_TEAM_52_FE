import React from "react"
import { StyledCalendar } from "../../pages/Calendar/styled"

const CalendarComponent = ({
  date,
  onDateChange,
  onDayClick,
  activeStartDate,
  onActiveStartDateChange,
  renderDotsForDate,
}) => {
  return (
    <StyledCalendar
      value={date}
      onChange={onDateChange}
      formatDay={(locale, date) => date.getDate()} // 숫자만 표시
      calendarType="gregory"
      showNeighboringMonth={false}
      next2Label={null}
      prev2Label={null}
      minDetail="year"
      tileContent={() => renderDotsForDate()}
      activeStartDate={activeStartDate}
      onActiveStartDateChange={onActiveStartDateChange}
      onClickDay={onDayClick}
    />
  )
}

export default CalendarComponent
