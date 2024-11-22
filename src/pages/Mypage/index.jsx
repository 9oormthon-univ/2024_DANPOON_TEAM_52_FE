import React from "react"
import BaseLayout from "../../components/BaseLayout"
import {
  Wrapper,
  ProfileInfo,
  ProfileImg,
  InfoText,
  InfoGroup,
  InfoSubText,
  FeedbackBtn,
  CategoryWrapper,
  CategoryIcon,
  CategoryName,
  CategoryGroup,
  ItemDate,
  ItemGroup,
  ItemName,
  ContentWrapper,
} from "./styled"
import { Highlight } from "../../components/Typo"
import { MypageData, categories } from "../../constants/data"
export default function Mypage() {
  const userData = {
    userName: "김구름",
  }

  const groupedData = categories.map((category) => ({
    ...category,
    items: MypageData.filter((item) => item.category === category.id),
  }))

  return (
    <BaseLayout>
      <Wrapper>
        <ProfileInfo>
          <ProfileImg src="/profileimg.png" />
          <InfoGroup>
            <InfoText>
              <Highlight>{userData.userName}</Highlight>님의 이력
            </InfoText>
            <InfoSubText>나의 이력을 추가하고 관리할 수 있어요</InfoSubText>
          </InfoGroup>
        </ProfileInfo>
        <FeedbackBtn>AI 피드백 받기</FeedbackBtn>
        <ContentWrapper>
          {groupedData.map((category) => (
            <CategoryWrapper key={category.id}>
              <CategoryGroup>
                <CategoryIcon src={category.icon}></CategoryIcon>
                <CategoryName>{category.name}</CategoryName>
              </CategoryGroup>
              {category.items.map((item, index) => (
                <ItemGroup key={index}>
                  <ItemDate>
                    {item.startDate} ~ {item.endDate}
                  </ItemDate>
                  <ItemName>{item.itemName}</ItemName>
                </ItemGroup>
              ))}
            </CategoryWrapper>
          ))}
        </ContentWrapper>
      </Wrapper>
    </BaseLayout>
  )
}
