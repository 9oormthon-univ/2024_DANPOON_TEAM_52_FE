import React, { useState } from "react";
import {
  CategoryWrapper,
  CategoryGroup,
  CategoryIcon,
  CategoryName,
  ItemDate,
  ItemGroup,
  ItemName,
} from "./styled";

const CategoryItem = ({ category, onClickOption }) => {
  const [selectedOptionId, setSelectedOptionId] = useState(null); // 선택된 항목 ID 관리

  return (
    <CategoryWrapper key={category.id}>
      <CategoryGroup>
        <CategoryIcon src={category.icon} />
        <CategoryName>{category.name}</CategoryName>
      </CategoryGroup>
      {category.items.map((item, index) => (
        <ItemGroup key={index}>
          <ItemDate>
            {item.startDate} ~ {item.endDate}
          </ItemDate>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ItemName>{item.itemName}</ItemName>
            <ItemName style={{ fontSize: "12px", color: "#C3C3C3" }}>
              {item.detail}
            </ItemName>
          </div>
          <div style={{ position:"relative" }}>
            <img
              src="/optionicon.png"
              width="2px"
              height="10px"
              style={{ marginBottom: "15px" }}
              onClick={() => {
                // 상태 업데이트
                setSelectedOptionId(
                  item.resume_id === selectedOptionId ? null : item.resume_id
                );
                onClickOption(item.resume_id);
              }}
            />
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
                  right:"-20px",
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
                    fontSize:"10px"
                  }}
                  onClick={() => {
                    // 수정 로직 추가
                    alert(`수정 버튼 클릭: ${item.itemName}`);
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
                    fontSize:"10px"
                  }}
                  onClick={() => {
                    // 삭제 로직 추가
                    alert(`삭제 버튼 클릭: ${item.itemName}`);
                  }}
                >
                  삭제
                </div>
              </div>
            )}
          </div>
        </ItemGroup>
      ))}
    </CategoryWrapper>
  );
};

export default CategoryItem;