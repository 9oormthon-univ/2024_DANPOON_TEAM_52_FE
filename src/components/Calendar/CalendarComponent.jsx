import React from "react";
import { StyledCalendar, AddScheduleButton } from "../../pages/Calendar/styled";
import Legend from "./Legend";
import TodayMessage from "./TodayMessage";
const CalendarComponent = ({
  date,
  activeStartDate,
  onActiveStartDateChange,
  renderDotsForDate,
  setIsModalOpen,
  selectDate,
  selectedDate,
  events,
}) => {
  // 오늘 날짜 계산
  const today = new Date();
  const formattedToday = today; // YYYY-MM-DD 형식
  console.log(formattedToday)
  // 오늘 일정 찾기
  const todaysEvents = events.filter((event) => {
    const eventStart = new Date(event.startDate);
    const eventEnd = new Date(event.endDate);

    // 오늘 날짜가 startDate ~ endDate 범위에 포함되는지 확인
    return today >= eventStart && today <= eventEnd;
  });

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
        onClickDay={(date) => {
          selectDate(date);
        }}
      />
      <AddScheduleButton onClick={() => setIsModalOpen(true)}>+</AddScheduleButton>

      <TodayMessage today={today} events={events} />
      <Legend />
    </>
  );
};

export default CalendarComponent;