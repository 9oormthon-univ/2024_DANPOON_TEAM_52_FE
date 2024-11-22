import React from "react"
import {
  ModalOverlay,
  ModalContent,
  ModalInput,
  ModalButtonGroup,
  ModalButton,
  SingleCheckbox,
} from "../../pages/Calendar/styled"
import { DatePicker } from "antd"
import { useState } from "react"
import styled from "styled-components"
const DatePickerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
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
}) => {
  if (!isModalOpen) return null
  const [isSingleDate, setIsSingleDate] = useState(false)
  const [title, setTitle] = useState("")
  //일정 객체
  const addTodo = {
    startDate: startDate,
    endDate: endDate,
    title: title,
  }
  const handleChecked = (event) => {
    setIsSingleDate(event.target.checked)
  }
  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>일정 추가하기</h3>
        <ModalInput onChange={(e) => setTitle(e.target.value)} />
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
        <SingleCheckbox
          style={{
            position: "relative",
            top: "10px",
            right: "40%",
            color: "white",
          }}
          onChange={handleChecked}
        >
          단일
        </SingleCheckbox>
        <ModalButtonGroup>
          <ModalButton onClick={onClose}>취소</ModalButton>
          <ModalButton
            onClick={() => {
              onClickAddBtn(addTodo, setIsModalOpen)
            }}
          >
            추가
          </ModalButton>
        </ModalButtonGroup>
      </ModalContent>
    </ModalOverlay>
  )
}

export default ModalComponent
