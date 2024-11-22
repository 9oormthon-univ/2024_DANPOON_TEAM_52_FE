import React from "react"
import { useState, useEffect } from "react"
export function useDateFunc() {
  const [date, setDate] = useState(() => new Date())
  //모든 일정을 관리할 배열
  const [events, setEvents] = useState([{
    startDate: "2024-11-10",
    endDate: "2024-11-12",
    title: "Workshop"}])
  //일정추가할 날짜
  const [addDate, setAddDate] = useState("");
  const [selectedDate, setSelectedDate] = useState(null)
  const [showDetails, setShowDetails] = useState(false)
  const questData = ["2024-11-22", "2024-11-24"]
  //일정 추가 버튼 클릭 -> 포맷화된 데이터를 저장(서버에 POST 후 다시 조회 -> 렌더링)
  const handleSaveEvent = (newEvent) => {
    const formattedDate = newEvent.toISOString().split("T")[0]
    setAddDate(formattedDate);
    setEvents((prev) => [...prev, formattedDate])
  }

  //날짜 클릭했을 때 -> 해당 날짜 일정 확인(모달)
  const selectDate = (date) => {
    if (showDetails) {
      setShowDetails(false) // 먼저 모달을 닫음
      setTimeout(() => {
        setSelectedDate(date) // 새로운 날짜로 설정
        setShowDetails(true) // 딜레이 후 모달을 다시 열음
      }, 100) // 모달 닫히는 애니메이션 시간과 동일하게 설정
    } else {
      setSelectedDate(date)
      setShowDetails(true)
    }
  }

  const onClickAddBtn = (addData, ModalOpen) => {
    //일정추가할 데이터 데이터추가(서버전송)
    setEvents((prev)=>[...prev, addData])
    ModalOpen(false)
  }

  const renderDotsForDate = (date) => {
    // Date 객체를 YYYY-MM-DD 형식으로 변환
    const formattedDate =
      date.date instanceof Date && !isNaN(date.date)
        ? date.date.toISOString().split("T")[0] // YYYY-MM-DD 형식으로 변환
        : null

    if (!formattedDate) {
      return null // 유효하지 않은 날짜는 렌더링하지 않음
    }
    // 날짜가 events 배열에 포함되어 있으면 동그란 원을 렌더링
    if (events.includes(formattedDate) || questData.includes(formattedDate)) {
      return (
        <div
          style={{
            display: "flex", // 가로 정렬
            justifyContent: "center", // 중앙 정렬
            gap: "1px", // 동그라미 간격
          }}
        >
          {events.includes(formattedDate) && (
            <div
              style={{
                background: "white",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
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
              }}
            />
          )}
        </div>
      );
    }

    return null // 해당 날짜가 events에 없으면 아무것도 렌더링하지 않음
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
    setEvents,
    showDetails,
    addDate,
    onClickAddBtn
  }
}
