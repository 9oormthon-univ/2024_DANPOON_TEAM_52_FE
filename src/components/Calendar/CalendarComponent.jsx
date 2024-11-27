import React, { useState, useEffect } from "react";
import { StyledCalendar, AddScheduleButton } from "../../pages/Calendar/styled";
import Legend from "./Legend";
import TodayMessage from "./TodayMessage";
import { fetchTodo } from "../../apis/calendar";

const CalendarComponent = ({
  date,
  renderDotsForDate,
  setIsModalOpen,
  selectDate,
  selectedDate,
  events,
}) => {
  const [activeStartDate, setActiveStartDate] = useState(new Date()); // 초기값 설정
  const [todoList, setToDoList] = useState("");
  //month 추출(해당 month 일정 조회 목적)
  const getCurrentMonth = () => {
    if (!(activeStartDate instanceof Date) || isNaN(activeStartDate)) {
      return "Invalid Date";
    }
    const month = activeStartDate.getMonth() + 1; // 0부터 시작
    return `${month < 10 ? `0${month}` : month}`; // YYYY-MM 형식
  };

  useEffect(() => {
    const fetchAndSetTodo = async () => {
      try {
        const currentMonth = getCurrentMonth();
        const todos = await fetchTodo(currentMonth); // 비동기 호출
        console.log(todos);
        setToDoList(todos); // 결과를 상태로 저장
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };
    fetchAndSetTodo(); // 함수 실행
  }, [activeStartDate]); // activeStartDate 변경 시 호출
  return (
    <>
      <StyledCalendar
        key={selectedDate}
        value={date}
        formatDay={(_, date) => date.getDate()} // 숫자만 표시
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        tileContent={(date) => renderDotsForDate(date)}
        onActiveStartDateChange={(newDate) => {
          const parsedDate = new Date(newDate.activeStartDate); // newDate.activeStartDate를 사용
          if (!isNaN(parsedDate)) {
            setActiveStartDate(parsedDate); // 유효한 Date 객체만 설정
          } else {
            console.error("Invalid date received:", newDate.activeStartDate);
          }
        }}
        onClickDay={(date) => {
          selectDate(date);
        }}
      />
      <div>현재 보고 있는 달: {getCurrentMonth()}</div>
      <AddScheduleButton onClick={() => setIsModalOpen(true)}>+</AddScheduleButton>
      <TodayMessage events={events} />
      <Legend />
    </>
  );
};

export default CalendarComponent;