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
const ModalComponent = ({
  isModalOpen,
  onClose,
  setIsModalOpen,
  handleSaveEvent,
  addDate,
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
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
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
            <div
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
              <div
                style={{
                  border: "none",
                  color: "white",
                }}
              >
                ~
              </div>
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
            </div>
          )}
        </div>
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
