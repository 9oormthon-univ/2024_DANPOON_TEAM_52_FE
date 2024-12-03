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
import StyledSwitch from "../../../components/Switch"
import { Text } from "../../../components/Typo"
import { reqPostResume, reqUpdateResume } from "../../../apis/user"
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

const AddCareerPage = ({ setIsModalOpen, setIsEdit, isEdit, editItemId }) => {
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
    id: "",
    name: "",
  })

  const { startDate, setStartDate, endDate, setEndDate } = useDateRange()
  const handleAddCareer = (newCareer) => {
    setItems((prevItems) => [...prevItems, newCareer])
  }
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleCategoryClick = (category) => {
    switch (category.id) {
      case 1:
        setSelectedCategory({
          id: "1",
          name: "ACADEMY",
        })
        break
      case 2:
        setSelectedCategory({
          id: "2",
          name: "CAREER",
        })
        break
      case 3:
        setSelectedCategory({
          id: "3",
          name: "QUALIFICATION",
        })
        break
      case 4:
        setSelectedCategory({
          id: "4",
          name: "EXPERIENCE",
        })
        break
      case 5:
        setSelectedCategory({
          id: "5",
          name: "ETC",
        })
        break
    }
    setIsOpen(false)
  }

  const getIconSrc = (id) => {
    return `/categories/category${id}.png` // 이미지 경로를 동적으로 생성
  }

  const onClickAddCareer = () => {
    if (!careerName || !selectedCategory.id || !startDate || !endDate) {
      alert("모든 항목을 입력해주세요.")
      return
    }
    //서버에 등록할 데이터
    const newCareer = {
      resume_category: selectedCategory.name,
      title: careerName,
      content: detail,
      start_date: startDate,
      end_date: endDate,
    }
    console.log(newCareer)
    // 부모 컴포넌트의 업데이트 함수 호출
    reqPostResume(newCareer)

    // 모달 닫기
    setIsModalOpen(false)
  }
  const onClickEditCareer = (id) => {
    if (!careerName || !selectedCategory.id || !startDate || !endDate) {
      alert("모든 항목을 입력해주세요.")
      return
    }
    //서버에 수정할 데이터
    const editCareer = {
      resume_category: selectedCategory.name,
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
        <S.DropdownWrapper>
          <S.DropdownHeader onClick={toggleDropdown}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {selectedCategory.id && (
                <img
                  src={getIconSrc(selectedCategory.id)}
                  alt={selectedCategory.name + 123}
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                />
              )}
              <div style={{ textAlign: "center" }}>
                {categories[parseInt(selectedCategory.id) - 1]?.name}
              </div>
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text>하루종일</Text>
          <StyledSwitch onChange={(checked) => setIsSingleDate(checked)} />
        </div>
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
              onChange={(date) => {
                const formattedDate = date && date.format("YYYY-MM-DD")
                setStartDate(formattedDate)
                setEndDate(formattedDate)
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
                placeholder="시작 날짜"
                onChange={(date) =>
                  setStartDate(date && date.format("YYYY-MM-DD"))
                }
                format="YYYY-MM-DD"
              />
              <DateDivide>~</DateDivide>
              <DatePicker
                style={{
                  width: "100%",
                  background: "#262827",
                  border: "none",
                  color: "white",
                }}
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
