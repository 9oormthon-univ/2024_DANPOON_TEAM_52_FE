import React from "react"
import styled from "styled-components"
import calendarAtom from "../../store/atoms/todo"
import { useRecoilValue } from "recoil"
import { deleteSchedule } from "../../apis/calendar"
import ListItem from "./CalendarListItem"
import { CATEGORIES } from "../../constants/dummy"
const EventDetails = ({
  selectedDate,
  getDatesInRange,
  openEditModal,
  isModalOpen,
}) => {
  const todo = useRecoilValue(calendarAtom) // Recoil 데이터
  return (
    <>
      {/* 퀘스트 */}
      {todo?.quest_response_dto_list &&
        todo.quest_response_dto_list.map((el) => {
          const matchedCategory = CATEGORIES.find(
            (category) => category.value === el.goal_category
          )
          //시작날짜와 종료날짜로 기간 계산 -> 기간 내에 일정표시하기 위함
          const eventDates = getDatesInRange(el.deadline, el.deadline)
          if (eventDates.includes(selectedDate.toLocaleDateString("en-CA"))) {
            return (
              <ListItem
                key={el.quest_id}
                icon={matchedCategory ? matchedCategory.icon : "X"}
                description={`${el.deadline}`}
                title={el.title}
              ></ListItem>
            )
          }
          return null
        })}
      {/* 일정 */}
      {todo?.schedule_response_dto_list &&
        todo.schedule_response_dto_list.map((el) => {
          //시작날짜와 종료날짜로 기간 계산 -> 기간 내에 일정표시하기 위함
          const eventDates = getDatesInRange(el.start_date, el.end_date)
          if (eventDates.includes(selectedDate.toLocaleDateString("en-CA"))) {
            return (
              /*일정 수정/삭제 -> key값으로 지정된 각 일정id 사용*/
              <ListItem
                key={el.schedule_id}
                description={`${el.start_date} ~ ${el.end_date}`}
                title={el.content}
                onEdit={() => {
                  console.log(el)
                  openEditModal(el.schedule_id) // 수정 모달 열기
                }}
                onDelete={() => {
                  deleteSchedule(el.schedule_id) // 삭제 동작
                }}
                option={{ editVisible: true, deleteVisible: true }}
              ></ListItem>
            )
          }
          return null
        })}
    </>
  )
}

export default EventDetails

const ScrollContainer = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #2f2f2f;
    border-radius: 10px;
  }
`
