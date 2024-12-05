import React from "react"
import styled from "styled-components"
import { useRecoilValue } from "recoil"
import calendarAtom from "../../store/atoms/todo"

const MessageContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #c3c3c3;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
`

const TodayMessage = () => {
  const todo = useRecoilValue(calendarAtom) // Recoil에서 일정 데이터 가져오기
  const today = new Date().toLocaleDateString("en-CA") // 오늘 날짜 (YYYY-MM-DD 형식)

  const schedules = todo?.schedule_response_dto_list || []
  const todaysEvents = schedules.filter(
    (event) => today >= event.start_date && today <= event.end_date
  )

  return (
    <MessageContainer>
      {todaysEvents.length > 0 ? (
        <p>{new Date().getDate()}일, 오늘 일정을 확인해보세요!</p>
      ) : (
        <p>{new Date().getDate()}일, 오늘은 일정이 없어요</p>
      )}
    </MessageContainer>
  )
}

export default TodayMessage
