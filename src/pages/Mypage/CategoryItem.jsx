import React, { useState } from "react"
import {
  CategoryWrapper,
  CategoryGroup,
  CategoryIcon,
  CategoryName,
  ItemDate,
  ItemGroup,
  ItemName,
} from "./styled"
import { reqDeleteResume } from "../../apis/user"
import AddCareerPage from "./AddCareer/AddCareer"
import dayjs from "dayjs"
const CategoryItem = ({ category, onClickOption, isEdit, setIsEdit }) => {
  const [selectedOptionId, setSelectedOptionId] = useState(null) // 선택된 항목 ID 관리
  return (
    <CategoryWrapper key={category.id}>
      <CategoryGroup>
        <CategoryIcon>{category.icon}</CategoryIcon>
        <CategoryName>{category.name}</CategoryName>
      </CategoryGroup>
      {category.items.map((item, index) => (
        <ItemGroup key={index}>
          <ItemDate>
            {dayjs(item.start_date).isSame(dayjs(item.end_date), "day")
              ? `${dayjs(item.start_date).format("YY.MM.DD.")}`
              : `${dayjs(item.start_date).format("YY.MM.DD.")} ~ ${
                  item.end_date !== null
                    ? dayjs(item.end_date)?.format("YY.MM.DD.")
                    : "진행중"
                }`}
          </ItemDate>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ItemName>{item.itemName}</ItemName>
            <ItemName style={{ fontSize: "12px", color: "#C3C3C3" }}>
              {item.detail}
            </ItemName>
          </div>
          <img
            src="/optionicon.png"
            width="2px"
            height="10px"
            onClick={() => {
              // 상태 업데이트
              setSelectedOptionId(
                item.resume_id === selectedOptionId ? null : item.resume_id
              )
              onClickOption(item.resume_id)
            }}
          />
          <div style={{ position: "relative" }}>
            {selectedOptionId === item.resume_id && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "black",
                  width: "79px",
                  height: "71px",
                  justifyContent: "center",
                  borderRadius: "6px",
                  position: "absolute",
                  right: "-20px",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontFamily: "Pretendard",
                    borderBottom: "0.5px solid white",
                    padding: "10px",
                    cursor: "pointer",
                    fontSize: "10px",
                  }}
                  onClick={() => {
                    // 수정 로직 추가
                    setIsEdit(true)
                  }}
                >
                  수정
                </div>
                <div
                  style={{
                    color: "white",
                    fontFamily: "Pretendard",
                    padding: "10px",
                    cursor: "pointer",
                    fontSize: "10px",
                  }}
                  onClick={() => {
                    // 삭제 로직 추가
                    reqDeleteResume(item)
                  }}
                >
                  삭제
                </div>
              </div>
            )}
            {isEdit && (
              <AddCareerPage
                isEdit={isEdit}
                editItemId={selectedOptionId}
                setIsEdit={setIsEdit}
              ></AddCareerPage>
            )}
          </div>
        </ItemGroup>
      ))}
    </CategoryWrapper>
  )
}

export default CategoryItem
