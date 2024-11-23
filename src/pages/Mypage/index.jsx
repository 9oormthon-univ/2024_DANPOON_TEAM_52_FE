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
import { ReactComponent as Share } from "../../svgs/share.svg"
import { ReactComponent as Plus } from "../../svgs/plus.svg"
import { ReactComponent as Setting } from "../../svgs/Settings.svg"
import { Highlight } from "../../components/Typo"
import { categories } from "../../constants/data"
import { reqGetUser } from "../../apis/user"
import userAtom from "../../store/atoms/user"
import { useRecoilState } from "recoil"
import { reqGetFeedback } from "../../apis/feedback"

export default function Mypage() {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false)
  const [feedbackData, setFeedbackData] = useState("")
  const [userData, setUserData] = useRecoilState(userAtom)
  const [items, setItems] = useState([
    {
      category: 1,
      startDate: "2020-02-10",
      endDate: "2024-02-28",
      itemName: "인천대학교 컴퓨터공학과 졸업",
      detail: "20학번",
    },
  ])

  const groupedData = categories.map((category) => ({
    ...category,
    items: items.filter((item) => item.category === category.id),
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
    setItems((prevItems) => [...prevItems, newCareer])
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