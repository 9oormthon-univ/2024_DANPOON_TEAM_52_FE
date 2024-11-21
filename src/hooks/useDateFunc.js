import React from "react"
import { useState, useEffect } from "react"
export function useDateFunc() {
  const [date, setDate] = useState(() => new Date())
  //모든 일정을 관리할 배열
  const [events, setEvents] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)
  const [showDetails, setShowDetails] = useState(false)
  const questData = ["2024-11-22", "2024-11-24"]

  //일정 추가 버튼 클릭 -> 포맷화된 데이터를 저장(서버에 POST 후 다시 조회 -> 렌더링)
  const handleSaveEvent = (newEvent, ModalOpen) => {
    const formattedDate = newEvent.toISOString().split("T")[0]
    setEvents((prev) => [...prev, ...formattedDate])
    console.log(formattedDate)
    ModalOpen(false)
  }

  //날짜 클릭했을 때 -> 해당 날짜 일정 확인(모달)
  const selectDate = (date) => {
    if (showDetails) {
      setShowDetails(false); // 먼저 모달을 닫음
      setTimeout(() => {
        setSelectedDate(date); // 새로운 날짜로 설정
        setShowDetails(true); // 딜레이 후 모달을 다시 열음
      }, 100); // 모달 닫히는 애니메이션 시간과 동일하게 설정
    } else {
      setSelectedDate(date);
      setShowDetails(true);
    }
  };

  //임시 퀘스트 데이터로 진행
  const renderDotsForDate = (date) => {
    //렌더링된 날짜들 모두 yyyy.mm.dd 포맷으로 바꾸고 비교
    const formattedDate =
      date instanceof Date && !isNaN(date)
        ? date.toISOString().split("T")[0]
        : null
    return (
      <>
        {events.includes(formattedDate) && (
          <div
            style={{
              background: "white",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              margin: "0 auto",
            }}
          />
        )}
        {questData.includes(formattedDate) && (
          <div
            style={{
              background: "#8AFAF1",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              margin: "0 auto",
            }}
          />
        )}
      </>
    )
  }

  return {
    date,
    selectedDate,
    events,
    questData,
    setDate,
    setSelectedDate,
    handleSaveEvent,
    renderDotsForDate,
    selectDate,
    setShowDetails,
    showDetails
  }
}
