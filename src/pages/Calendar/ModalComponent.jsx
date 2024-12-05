import React from "react"
import {
  ModalContent,
  ModalInput,
  ModalButtonGroup,
  ModalButton,
} from "../../pages/Calendar/styled"
import StyledSwitch from "../../components/Switch"
import { Text, Title } from "../../components/Typo"
import { DatePicker } from "antd"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { updateSchedule } from "../../apis/calendar"
import Modal from "../../components/Modal"
const DatePickerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
`
const CustomDatePicker = styled(DatePicker)`
  width: 100%;
  background: #262827;
  border: none;
  color: white;
  .ant-picker-input {
    .ant-picker-suffix {
      color: white;
    }
  }
  .ant-picker-input input::placeholder {
    color: #7d7d7d;
  }
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
const Main_Title = styled(Title)`
  text-align: center;
`
const ModalComponent = ({
  isModalOpen,
  onClose,
  setIsModalOpen,
  handleSaveEvent,
  onClickAddBtn,
  startDate,
  endDate,
  editTodo,
  isEdit,
}) => {
  if (!isModalOpen) return null
  const [isSingleDate, setIsSingleDate] = useState(false)
  const [title, setTitle] = useState("") // 초기값 설정
  // 일정 객체
  const addTodo = {
    content: title,
    start_date: startDate,
    end_date: endDate,
  }
  console.log(addTodo)
  return (
    <Modal
      open={isModalOpen}
      onClose={(e) => {
        e.stopPropagation() // 부모 이벤트 전파 차단
        setIsModalOpen(false)
      }}
      children={
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <Main_Title>{isEdit ? "일정 수정하기" : "일정 추가하기"}</Main_Title>{" "}
          <ModalInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
              <CustomDatePicker
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
                <CustomDatePicker
                  style={{
                    width: "100%",
                    background: "#262827",
                    border: "none",
                    color: "white",
                  }}
                  placeholder="시작 날짜"
                  onChange={(event) => {
                    handleSaveEvent(event, "start")
                  }}
                ></CustomDatePicker>
                <DateDivide>~</DateDivide>
                <CustomDatePicker
                  style={{
                    width: "100%",
                    background: "#262827",
                    border: "none",
                    color: "white",
                  }}
                  placeholder="종료 날짜"
                  onChange={(event) => {
                    handleSaveEvent(event, "end")
                  }}
                ></CustomDatePicker>
              </DateRangeWrapper>
            )}
          </DatePickerWrapper>
          <ModalButtonGroup>
            <ModalButton onClick={onClose}>취소</ModalButton>
            <ModalButton
              onClick={(e) => {
                e.stopPropagation()
                console.log("onClick 실행") // 이 로그가 표시되지 않으면 핸들러가 호출되지 않음
                if (isEdit) {
                  console.log(addTodo)
                  updateSchedule(editTodo, addTodo) // 일정 수정 API 호출
                } else {
                  onClickAddBtn(addTodo, setIsModalOpen)
                }
              }}
            >
              {isEdit ? "수정" : "추가"}
            </ModalButton>
          </ModalButtonGroup>
        </ModalContent>
      }
    />
  )
}

export default ModalComponent
