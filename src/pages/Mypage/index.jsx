import React, { useEffect, useState } from "react"
import BaseLayout from "../../components/BaseLayout"
import { useNavigate } from "react-router-dom"
import AddCareerPage from "./AddCareer/AddCareer"
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
import { ModalOverlay, ModalContent } from "../Calendar/styled"
import { ReactComponent as Share } from "../../svgs/share.svg"
import { ReactComponent as Plus } from "../../svgs/plus.svg"
import { ReactComponent as Setting } from "../../svgs/Settings.svg"
import { Highlight } from "../../components/Typo"
import { reqGetFeedback } from "../../apis/feedback"
import userAtom from "../../store/atoms/user"
import { useRecoilState } from "recoil"
import { resumeData } from "../../constants/data"
import { reqGetUser } from "../../apis/user"

export default function Mypage() {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false)
  const [feedbackData, setFeedbackData] = useState("")
  const [userData, setUserData] = useRecoilState(userAtom)

  // 카테고리 이름과 아이콘 매핑
  const categoryMapping = {
    academy_list: { name: "학력", icon: "/categories/category1.png" },
    career_list: { name: "경력", icon: "/categories/category2.png" },
    qualification_list: { name: "자격·어학·수상", icon: "/categories/category3.png" },
    experience_list: { name: "경험·활동·교육", icon: "/categories/category4.png" },
    etc_list: { name: "기타", icon: "/categories/category5.png" },
  }

  // groupedData 생성
  const groupedData = Object.keys(resumeData).map((key) => ({
    id: key,
    name: categoryMapping[key]?.name || "UNKNOWN",
    icon: categoryMapping[key]?.icon || "/default_icon.png",
    items: resumeData[key].map((item) => ({
      startDate: item.start_date,
      endDate: item.end_date,
      itemName: item.title,
      detail: item.content,
    })),
  }))

  useEffect(() => {
    const fetchUser = async () => {
      const res = await reqGetUser()
      if (res) {
        setUserData({
          nickname: res.data.nickname,
          img: res.data.image_url,
        })
      }
    }
    fetchUser()
  }, [])

  const handleAddCareer = (newCareer) => {
    setIsModalOpen(false)
  }

  const createFeedback = async () => {
    const res = await reqGetFeedback()
    if (res) {
      setFeedbackData(res.data.message) // Assuming `message` contains feedback text
      setIsFeedbackModalOpen(true)
    }
  }

  return (
    <BaseLayout>
      <Wrapper>
        <ProfileInfo>
          <ProfileImg src={userData.img} />
          <InfoGroup>
            <InfoText>
              <Highlight>{userData.nickname}</Highlight>님의 이력
            </InfoText>
            <InfoSubText>나의 이력을 추가하고 관리할 수 있어요</InfoSubText>
          </InfoGroup>
        </ProfileInfo>
        <FeedbackBtn onClick={createFeedback}>AI 피드백 받기</FeedbackBtn>
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
          ))}
          <NaviWrapper>
            <StyledButton>
              <Share />
            </StyledButton>
            <StyledButton>
              <Setting
                onClick={() => {
                  navigate("/setting")
                }}
              />
            </StyledButton>
          </NaviWrapper>
          <StyledPlus onClick={() => setIsModalOpen(true)}>
            <Plus />
          </StyledPlus>
        </ContentWrapper>
        {isModalOpen && (
          <AddCareerPage setIsModalOpen={setIsModalOpen} onAddCareer={handleAddCareer} />
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
  )
}