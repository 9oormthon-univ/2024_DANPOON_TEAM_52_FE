import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { useNavigate } from "react-router-dom";
import AddCareerPage from "./AddCareer/AddCareer";
import {
  Wrapper,
  ProfileInfo,
  ProfileImg,
  InfoText,
  InfoGroup,
  InfoSubText,
  FeedbackBtn,
  ContentWrapper,
  StyledButton,
  NaviWrapper,
  StyledPlus,
} from "./styled";
import { ModalOverlay, ModalContent } from "../Calendar/styled";
import { ReactComponent as Share } from "../../svgs/share.svg";
import { ReactComponent as Plus } from "../../svgs/plus.svg";
import { ReactComponent as Setting } from "../../svgs/Settings.svg";
import { Highlight } from "../../components/Typo";
import CategoryItem from "./CategoryItem";
import { useGroupedData, useFeedback } from "../../hooks/useMypage";

export default function Mypage() {
  const navigate = useNavigate();
  const groupedData = useGroupedData();
  const { feedbackData, isFeedbackModalOpen, setIsFeedbackModalOpen, createFeedback } =
    useFeedback();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <BaseLayout>
      <Wrapper>
        <ProfileInfo>
          <ProfileImg src="/default_profile.png" />
          <InfoGroup>
            <InfoText>
              <Highlight>사용자</Highlight>님의 이력
            </InfoText>
            <InfoSubText>나의 이력을 추가하고 관리할 수 있어요</InfoSubText>
          </InfoGroup>
        </ProfileInfo>
        <FeedbackBtn onClick={createFeedback}>AI 피드백 받기</FeedbackBtn>
        <ContentWrapper>
          {groupedData.map((category) => (
            <CategoryItem key={category.id} category={category}/>
          ))}
          <NaviWrapper>
            <StyledButton>
              <Share />
            </StyledButton>
            <StyledButton>
              <Setting
                onClick={() => {
                  navigate("/setting");
                }}
              />
            </StyledButton>
          </NaviWrapper>
          <StyledPlus onClick={() => setIsModalOpen(true)}>
            <Plus />
          </StyledPlus>
        </ContentWrapper>
        {isModalOpen && (
          <AddCareerPage setIsModalOpen={setIsModalOpen} />
        )}
        {isFeedbackModalOpen && (
          <ModalOverlay>
            <ModalContent>
              <h3>AI 피드백</h3>
              <p>{feedbackData}</p>
              <button onClick={() => setIsFeedbackModalOpen(false)}>닫기</button>
            </ModalContent>
          </ModalOverlay>
        )}
      </Wrapper>
    </BaseLayout>
  );
}