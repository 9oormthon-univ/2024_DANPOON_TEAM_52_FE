import React from "react"
import {
  ModalOverlay,
  ModalContent,
  ModalInput,
  ModalButtonGroup,
  ModalButton,
} from "../../pages/Calendar/styled"
import StyledSwitch from "../Switch"
import { Text } from "../Typo"
import { DatePicker } from "antd"
import { useState, useEffect} from "react"
import styled from "styled-components"
import { updateSchedule } from "../../apis/calendar"
const DatePickerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
`
const DateRangeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`
const DateDivide = styled.div`
  border: none;
  color: white;
`
const ModalComponent = ({
  isModalOpen,
  onClose,
  setIsModalOpen,
  handleSaveEvent,
  onClickAddBtn,
  startDate,
  endDate,
  editTodo, // 수정 모드의 데이터
  isEdit,
}) => {
  if (!isModalOpen) return null
  const [isSingleDate, setIsSingleDate] = useState(false)
  const [title, setTitle] = useState(editTodo?.content || "") // 초기값 설정
  // 일정 객체
  const addTodo = {
    content: title,
    start_date: startDate,
    end_date: endDate,
  }

  useEffect(() => {
    if (editTodo) {
      console.log(editTodo)
      setTitle(editTodo.content)
    }
  }, [editTodo])
  const handleChecked = (event) => {
    setIsSingleDate(event.target.checked)
  }
  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>{isEdit ? "일정 수정하기" : "일정 추가하기"}</h3>{" "}
        <ModalInput value={title} onChange={(e) => setTitle(e.target.value)} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text>하루종일</Text>
          <StyledSwitch
          checked={isSingleDate}
            onChange={(event) => {
              setIsSingleDate(event)
            }}
          />
        </div>
        <DatePickerWrapper>
          {isSingleDate ? (
            <DatePicker
              style={{
                width: "100%",
                background: "#262827",
                border: "none",
                color: "white",
              }}
              placeholder="날짜"
              onChange={(event) => {
                handleSaveEvent(event, "single")
              }}
              format="YYYY-MM-DD"
            />
          ) : (
            <DateRangeWrapper
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
              value={startDate}
            >
              <DatePicker
                style={{
                  width: "100%",
                  background: "#262827",
                  border: "none",
                  color: "white",
                }}
                onChange={(event) => {
                  handleSaveEvent(event, "start")
                }}
              ></DatePicker>
              <DateDivide>~</DateDivide>
              <DatePicker
                style={{
                  width: "100%",
                  background: "#262827",
                  border: "none",
                  color: "white",
                }}
                onChange={(event) => {
                  handleSaveEvent(event, "end")
                }}
              ></DatePicker>
            </DateRangeWrapper>
          )}
        </DatePickerWrapper>
        <ModalButtonGroup>
          <ModalButton onClick={onClose}>취소</ModalButton>
          <ModalButton
            onClick={() => {
              if (isEdit) {
                updateSchedule(editTodo.schedule_id, addTodo); // 일정 수정 API 호출
              } else {
                onClickAddBtn(addTodo, setIsModalOpen);
              }
            }}
          >
            {isEdit ? "수정" : "추가"}
          </ModalButton>
        </ModalButtonGroup>
      </ModalContent>
    </ModalOverlay>
  )
}

export default ModalComponent
