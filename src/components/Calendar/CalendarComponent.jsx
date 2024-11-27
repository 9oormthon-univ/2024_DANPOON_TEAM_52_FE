import React, { useState, useEffect } from "react";
import { StyledCalendar, AddScheduleButton } from "../../pages/Calendar/styled";
import Legend from "./Legend";
import TodayMessage from "./TodayMessage";
import { fetchTodo } from "../../apis/calendar";
import { useRecoilState } from "recoil";
import calendarAtom from "../../store/atoms/todo";

const CalendarComponent = ({
  date,
  renderDotsForDate,
  setIsModalOpen,
  selectDate,
  selectedDate,
}) => {
  const [activeStartDate, setActiveStartDate] = useState(new Date()); // 초기값 설정
  const [todoList, setToDoList] = useRecoilState(calendarAtom); // Recoil 상태 관리

  // month 추출 (해당 month 일정 조회 목적)
  const getCurrentMonth = () => {
    if (!(activeStartDate instanceof Date) || isNaN(activeStartDate)) {
      return "유효하지 않는 데이터";
    }
    const year = activeStartDate.getFullYear();
    const month = activeStartDate.getMonth() + 1; // 0부터 시작
    return `${month < 10 ? `0${month}` : month}`; // YYYY-MM 형식
  };

  useEffect(() => {
    const fetchAndSetTodo = async () => {
      try {
        const currentMonth = getCurrentMonth();
        const todos = await fetchTodo(currentMonth); // 비동기 호출
        setToDoList(todos.data); // [퀘스트[], 일정[]] 데이터를 Recoil에 저장
        console.log(todos.data);
      } catch (error) {
        console.error("일정 조회 실패했습니다.", error);
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
        tileContent={(tileDate) => renderDotsForDate(tileDate)}
        onActiveStartDateChange={(newDate) => {
          const parsedDate = new Date(newDate.activeStartDate); // newDate.activeStartDate 사용
          if (!isNaN(parsedDate)) {
            setActiveStartDate(parsedDate); // 유효한 Date 객체만 설정
          } else {
            console.error("유효하지 않은 데이터입니다", newDate.activeStartDate);
          }
        }}
        onClickDay={(date) => {
          selectDate(date);
        }}
      />
      <AddScheduleButton onClick={() => setIsModalOpen(true)}>+</AddScheduleButton>
      <TodayMessage />
      <Legend />
    </>
  );
};

export default CalendarComponent;