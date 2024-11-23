import React, { useState } from "react"
import {
  ModalOverlay,
  ModalContent,
  ModalInput,
  ModalButtonGroup,
  ModalButton,
} from "../../Calendar/styled"
import * as S from "./styled"
import styled from "styled-components"
import { DatePicker } from "antd"
import { useDateRange } from "../../../hooks/useDateRange"
import { useEvents } from "../../../hooks/useEvents"
import StyledSwitch from "../../../components/Switch"
import {Text} from "../../../components/Typo"
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

const AddCareerPage = ({ setIsModalOpen }) => {
  const categories = [
    { id: 1, name: "학력" },
    { id: 2, name: "자격·어학·수상" },
    { id: 3, name: "경험·활동·교육" },
    { id: 4, name: "경력" },
    { id: 5, name: "기타" },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [isSingleDate, setIsSingleDate] = useState(false)
  const [careerName, setCareerName] = useState("")
  const [detail, setDetail] = useState("")
  const [selectedCategory, setSelectedCategory] = useState({
    id: null,
    name: "이력 카테고리를 선택해주세요",
  })

  const { startDate, setStartDate, endDate, setEndDate } = useDateRange()
  const { setEvents } = useEvents()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setIsOpen(false)
  }

  const getIconSrc = (id) => {
    return `/categories/category${id}.png` // 이미지 경로를 동적으로 생성
  }

  const handleChecked = (event) => {
    setIsSingleDate(event.target.checked)
  }

  const onClickAddCareer = () => {
    if (!careerName || !selectedCategory.id || !startDate || !endDate) {
      alert("모든 항목을 입력해주세요.")
      return
    }

    const newCareer = {
      categoryId: selectedCategory.id,
      title: careerName,
      detail,
      startDate,
      endDate,
    }
    console.log(newCareer)
    // 새로운 이벤트 추가
    setEvents((prev) => [...prev, newCareer])

    // 모달 닫기
    setIsModalOpen(false)
  }
  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>이력 추가하기</h3>
        <S.DropdownWrapper>
          <S.DropdownHeader onClick={toggleDropdown}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {selectedCategory.id && (
                <img
                  src={getIconSrc(selectedCategory.id)}
                  alt={selectedCategory.name}
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                />
              )}
              <div style={{ textAlign: "center" }}>{selectedCategory.name}</div>
            </div>
            <S.DropdownArrow isOpen={isOpen}>▼</S.DropdownArrow>
          </S.DropdownHeader>
          <S.DropdownMenu isOpen={isOpen}>
            {categories.map((category) => (
              <S.MenuItem
                key={category.id}
                onClick={() => handleCategoryClick(category)}
              >
                <img
                  src={getIconSrc(category.id)}
                  alt={`${category.name} 아이콘`}
                />
                {category.name}
              </S.MenuItem>
            ))}
          </S.DropdownMenu>
        </S.DropdownWrapper>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <Text>하루종일</Text>
        <StyledSwitch onChange={(event)=>{setIsSingleDate(event)}}/>
        </div>
        <ModalInput
          style={{
            height: "40px",
          }}
          placeholder="활동명"
          value={careerName}
          onChange={(e) => setCareerName(e.target.value)}
        />

        <ModalInput
          style={{
            height: "40px",
          }}
          placeholder="세부사항"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />

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
                const date = new Date(event)
                setStartDate(date.toLocaleDateString("en-CA").split("T")[0])
                setEndDate(date.toLocaleDateString("en-CA").split("T")[0])
              }}
              format="YYYY-MM-DD"
            />
          ) : (
            <DateRangeWrapper>
              <DatePicker
                style={{
                  width: "100%",
                  background: "#262827",
                  border: "none",
                  color: "white",
                }}
                onChange={(event) => {
                  const date = new Date(event)
                  setStartDate(date.toLocaleDateString("en-CA").split("T")[0])
                }}
              />
              <DateDivide>~</DateDivide>
              <DatePicker
                style={{
                  width: "100%",
                  background: "#262827",
                  border: "none",
                  color: "white",
                }}
                onChange={(event) => {
                  const date = new Date(event)
                  setEndDate(date.toLocaleDateString("en-CA").split("T")[0])
                }}
              />
            </DateRangeWrapper>
          )}
        </DatePickerWrapper>

        <ModalButtonGroup>
          <ModalButton onClick={() => setIsModalOpen(false)}>취소</ModalButton>
          <ModalButton onClick={onClickAddCareer}>추가</ModalButton>
        </ModalButtonGroup>
      </ModalContent>
    </ModalOverlay>
  )
}

export default AddCareerPage
