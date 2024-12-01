import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import calendarAtom from "../../store/atoms/todo"
import { useRecoilValue } from "recoil"
import { deleteSchedule } from "../../apis/calendar"
const EventDetails = ({
  selectedDate,
  setShowDetails,
  getDatesInRange,
  openEditModal,
}) => {
  //밑으로 드래그하면 세부일정 모달 닫히도록
  const handleDragEnd = (_, info) => {
    if (info.offset.y > 100) {
      setShowDetails(false)
    }
  }
  const todo = useRecoilValue(calendarAtom) // Recoil 데이터
  return (
    <AnimatePresence>
      <MotionContainer
        initial={{ y: "100%", opacity: 1 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "100%", opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: "linear",
        }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 300 }}
        onDragEnd={handleDragEnd}
      >
        <DateText>{selectedDate?.toLocaleDateString("en-CA")}</DateText>
        <DayText>{selectedDate?.toString().split(" ")[0]}</DayText>
        <EventList>
          {todo?.schedule_response_dto_list?.length > 0 ? (
            todo.schedule_response_dto_list.map((el) => {
              //시작날짜와 종료날짜로 기간 계산 -> 기간 내에 일정표시하기 위함
              const eventDates = getDatesInRange(el.start_date, el.end_date)
              if (
                eventDates.includes(selectedDate.toLocaleDateString("en-CA"))
              ) {
                return (
                  /*일정 수정/삭제 -> key값으로 지정된 각 일정id 사용*/
                  <EventItem
                    key={el.schedule_id}
                    onClick={() => {
                      deleteSchedule(el.schedule_id)
                    }}
                  >
                    <EventCategory />
                    <EventDetailsText>
                      <EventDate>
                        {el.start_date === el.end_date
                          ? `${el.start_date}`
                          : `${el.start_date} ~ ${el.end_date}`}
                      </EventDate>
                      <EventTitle>{el.content}</EventTitle>
                    </EventDetailsText>
                    {/* api테스트용 임시 버튼입니다 */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation() // 이벤트 전파 중단
                        openEditModal(el) // 수정 모달 열기
                      }}
                    >
                      수정
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation() // 이벤트 전파 중단
                        deleteSchedule(el.schedule_id) // 삭제 동작
                      }}
                    >
                      삭제
                    </button>
                  </EventItem>
                )
              }
              return null
            })
          ) : (
            <p>일정이 존재하지않습니다.</p>
          )}
        </EventList>
      </MotionContainer>
    </AnimatePresence>
  )
}

export default EventDetails
const MotionContainer = styled(motion.div)`
  width: 100%;
  height: 350px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  opacity: 80%;
  color: white;
  padding: 30px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 5px 10px 15px 10px rgba(138, 250, 241, 0.5);
  @media (min-width: 520px) {
    width: 520px;
  }
`

const DateText = styled.div`
  font-size: 24px;
  font-family: "Pretendard", sans-serif;
  font-weight: bold;
`

const DayText = styled.div`
  font-size: 12px;
  font-family: "Pretendard", sans-serif;
  margin-bottom: 15px;
`

const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const EventItem = styled.li`
  height: 60px;
  background: rgba(44, 44, 44, 0.8);
  border-radius: 15px;
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`

const EventCategory = styled.div`
  background: silver;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const EventDetailsText = styled.div`
  display: flex;
  flex-direction: column;
`

const EventDate = styled.div`
  font-size: 12px;
  font-family: "Pretendard", sans-serif;
  color: #7d7d7d;
  font-weight: bold;
`

const EventTitle = styled.div`
  font-size: 15px;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  margin-top: 5px;
`
