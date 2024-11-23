import React from "react"
import BaseLayout from "../../components/BaseLayout"
import { DatePicker } from "antd"
import { useState } from "react"
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
  StyledButton,
  NaviWrapper,
  StyledPlus,
} from "./styled"
import { useNavigate } from "react-router-dom"
import AddCareerPage from "./AddCareer/AddCareer"
import { ReactComponent as Share } from "../../svgs/share.svg"
import { ReactComponent as Plus } from "../../svgs/plus.svg"
import { ReactComponent as Setting } from "../../svgs/Settings.svg"
import { Highlight } from "../../components/Typo"
import { MypageData, categories } from "../../constants/data"
export default function Mypage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = {
    userName: "김구름",
  }
  
  const groupedData = categories.map((category) => ({
    ...category,
    items: MypageData.filter((item) => item.category === category.id),
  }))

  //이력추가버튼 클릭
  const onClickAddBtn = () => {
    setIsModalOpen(true);
  }

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
                  <img src="/optionicon.png" width="2px" height="10px" style={{marginBottom:"15px"}}/>
                </ItemGroup>
              ))}
            </CategoryWrapper>
          ))}
          <NaviWrapper>
            <StyledButton>
              <Share />
            </StyledButton>
            <StyledButton>
              <Setting onClick={()=>{navigate('/setting')}}/>
            </StyledButton>
          </NaviWrapper>
          <StyledPlus onClick={onClickAddBtn}>
            <Plus />
          </StyledPlus>
        </ContentWrapper>
        {isModalOpen && (<AddCareerPage setIsModalOpen={setIsModalOpen}/>)}
      </Wrapper>
    </BaseLayout>
  )
}
