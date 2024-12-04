import React, { useState } from "react"
import {
  ModalOverlay,
  ModalContent,
  ModalInput,
  ModalButtonGroup,
  ModalButton,
} from "../../Calendar/styled"
import styled from "styled-components"
import { DatePicker } from "antd"
import { useDateRange } from "../../../hooks/useDateRange"
import StyledSwitch from "../../../components/Switch"
import { Text } from "../../../components/Typo"
import { reqPostResume, reqUpdateResume } from "../../../apis/user"
import { CATEGORIES, DEFAULT_RESUME } from "../../../constants/resume"
import SelectComponent from "../../../components/Select"
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

const Select = styled(SelectComponent)`
  text-align: left;
  width: 100%;
`
const AddCareerPage = ({ setIsModalOpen, setIsEdit, isEdit, editItemId }) => {
  const [isSingleDate, setIsSingleDate] = useState(false)
  const [careerName, setCareerName] = useState("")
  const [selectedResume, setSelectedResume] = useState(DEFAULT_RESUME)
  const [detail, setDetail] = useState("")
  const { startDate, setStartDate, endDate, setEndDate } = useDateRange()
  const onClickAddCareer = () => {
    if (
      !careerName ||
      !selectedResume.resume_category ||
      !startDate ||
      !endDate
    ) {
      alert("모든 항목을 입력해주세요.")
      return
    }
    //서버에 등록할 데이터
    const NewCareer = {
      resume_category: selectedResume.resume_category,
      title: careerName,
      content: detail,
      start_date: startDate,
      end_date: endDate,
    }
    console.log(NewCareer)
    reqPostResume(NewCareer)
    setIsModalOpen(false)
  }
  const onClickEditCareer = (id) => {
    if (
      !careerName ||
      !selectedResume.resume_category ||
      !startDate ||
      !endDate
    ) {
      alert("모든 항목을 입력해주세요.")
      return
    }
    //서버에 수정할 데이터
    const editCareer = {
      resume_category: selectedResume.resume_category,
      title: careerName,
      content: detail,
      start_date: startDate,
      end_date: endDate,
    }
    reqUpdateResume(id, editCareer)
  }
  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>이력 {isEdit ? <span>수정하기</span> : <span>추가하기</span>}</h3>
        <Select
          style={{ marginTop: "20px" }}
          value={selectedResume.resume_category}
          onChange={(v) => {
            setSelectedResume((prev) => ({
              ...prev,
              resume_category: CATEGORIES.find(
                (category) => category.value === v
              ).value,
            }))
            console.log(selectedResume)
          }}
          options={CATEGORIES.map((v) => ({
            value: v.value,
            label: `${v.icon} ${v.label}`,
          }))}
        />
        <ModalInput
          style={{ height: "40px" }}
          placeholder="활동명"
          value={careerName}
          onChange={(e) => setCareerName(e.target.value)}
        />
        <ModalInput
          style={{ height: "40px" }}
          placeholder="세부사항"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Text>하루종일</Text>
          <StyledSwitch onChange={(checked) => setIsSingleDate(checked)} />
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
              onChange={(date) => {
                const formattedDate = date && date.format("YYYY-MM-DD")
                setStartDate(formattedDate)
                setEndDate(formattedDate)
              }}
              format="YYYY-MM-DD"
            />
          ) : (
            <DateRangeWrapper>
              <CustomDatePicker
                placeholder="시작 날짜"
                onChange={(date) =>
                  setStartDate(date && date.format("YYYY-MM-DD"))
                }
                format="YYYY-MM-DD"
              />
              <DateDivide>~</DateDivide>
              <CustomDatePicker
                placeholder="종료 날짜"
                onChange={(date) =>
                  setEndDate(date && date.format("YYYY-MM-DD"))
                }
                format="YYYY-MM-DD"
              />
            </DateRangeWrapper>
          )}
        </DatePickerWrapper>
        <ModalButtonGroup>
          <ModalButton
            onClick={() => (isEdit ? setIsEdit(false) : setIsModalOpen(false))}
          >
            취소
          </ModalButton>
          <ModalButton
            onClick={
              isEdit
                ? () => {
                    onClickEditCareer(editItemId)
                    setIsEdit(false)
                  }
                : () => {
                    onClickAddCareer()
                    setIsModalOpen(false)
                  }
            }
          >
            {isEdit ? "수정" : "추가"}
          </ModalButton>
        </ModalButtonGroup>
      </ModalContent>
    </ModalOverlay>
  )
}

export default AddCareerPage
