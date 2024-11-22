import React from "react"
import { useState, useEffect } from "react"
export function useDateFunc() {
  const [date, setDate] = useState(() => new Date())
  //모든 일정을 관리할 배열
  const [events, setEvents] = useState([{
    startDate: "2024-11-10",
    endDate: "2024-11-12",
    title: "Workshop"
  }])
  //일정추가할 날짜
  const [startDate, setStartDate]= useState("");
  const [endDate, setEndDate]= useState("");
  const [selectedDate, setSelectedDate] = useState(null)
  const [showDetails, setShowDetails] = useState(false)
  const questData = ["2024-11-22", "2024-11-24"]
  //일정 추가 버튼 클릭 -> 포맷화된 데이터를 저장(서버에 POST 후 다시 조회 -> 렌더링)
  const handleSaveEvent = (newEvent, isSingle) => {
    const eventDate = new Date(newEvent); // newEvent를 Date 객체로 변환
    const formattedDate = eventDate.toLocaleDateString("en-CA");
    console.log(formattedDate)
    if(isSingle){
    setStartDate(formattedDate);
    setEndDate(formattedDate);
    }
    else{
      if(!startDate) setStartDate(formattedDate)
      else setEndDate(formattedDate)
    }
    console.log(startDate,endDate)
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
  //범위내 날짜들 계산
  const getDatesInRange = (startDate, endDate) => {
    const date = new Date(startDate);
    const dates = [];
  
    while (date <= new Date(endDate)) {
      dates.push(date.toLocaleDateString("en-CA").split("T")[0]); // YYYY-MM-DD 형식으로 추가
      date.setDate(date.getDate() + 1); // 하루씩 증가
    }
  
    return dates;
  };

  const renderDotsForDate = (tileDate) => {
    const formattedDate =
      tileDate.date instanceof Date && !isNaN(tileDate.date)
        ? tileDate.date.toLocaleDateString("en-CA").split("T")[0] // YYYY-MM-DD 형식으로 변환
        : null;
        console.log(formattedDate)
    if (!formattedDate) {
      return null; // 유효하지 않은 날짜는 렌더링하지 않음
    }
  
    // 이벤트 또는 퀘스트 데이터와 일치하는지 확인
    const matchingEvents = events.filter((event) => {
      const eventDates = getDatesInRange(event.startDate, event.endDate);
      return eventDates.includes(formattedDate); // 날짜가 범위 내에 있는지 확인
    });
  
    const isQuestDate = questData.includes(formattedDate);
  
    if (matchingEvents.length > 0 || isQuestDate) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2px", // 동그라미 간격
          }}
        >
          {matchingEvents.length > 0 && (
            <div
              style={{
                background: "white",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
              }}
            />
          )}
          {isQuestDate && (
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
  
    return null; // 일치하는 일정이 없으면 아무것도 렌더링하지 않음
  };

  return {
    date,
    selectedDate,
    events,
    questData,
    startDate,
    endDate,
    showDetails,
    setDate,
    setSelectedDate,
    handleSaveEvent,
    renderDotsForDate,
    selectDate,
    setShowDetails,
    setEvents,
    onClickAddBtn
  }
}
