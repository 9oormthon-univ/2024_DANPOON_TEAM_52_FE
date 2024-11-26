import React from "react";
import {
  CategoryWrapper,
  CategoryGroup,
  CategoryIcon,
  CategoryName,
  ItemDate,
  ItemGroup,
  ItemName,
} from "./styled";

const CategoryItem = ({ category }) => (
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
        <img
          src="/optionicon.png"
          width="2px"
          height="10px"
          style={{ marginBottom: "15px" }}
        />
      </ItemGroup>
    ))}
  </CategoryWrapper>
);

export default CategoryItem;