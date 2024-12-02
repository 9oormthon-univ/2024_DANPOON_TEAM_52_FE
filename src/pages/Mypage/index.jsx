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
import CategoryItem from "./CategoryItem"
import { useGroupedData, useFeedback } from "../../hooks/useMypage"
import { reqGetResume } from "../../apis/user"
import resumeAtom from "../../store/atoms/resume"
import userInfoAtom from "../../store/atoms/userinfo"
import { useRecoilState, useRecoilValue } from "recoil"
import { reqGetUserJob } from "../../apis/job"
import userJobAtom from "../../store/atoms/userjob"
export default function Mypage() {
  const [isEdit, setIsEdit] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [resumeData, setResumeData] = useRecoilState(resumeAtom)
  const [userJob, setUserJob] = useRecoilState(userJobAtom)
  const userData = useRecoilValue(userInfoAtom)
  const navigate = useNavigate()
  const groupedData = useGroupedData()
  const {
    feedbackData,
    isFeedbackModalOpen,
    setIsFeedbackModalOpen,
    createFeedback,
  } = useFeedback()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const onClickOption = (item) => {
    //console.log(item, "번째 항목 선택")
    //선택한 항목 Id 설정
    setSelectedOption(item)
    if (selectedOption === item) {
      setSelectedOption(null) // 동일한 항목 클릭 시 닫기
    } else {
      setSelectedOption(item) // 선택된 항목 설정
    }
  }
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await reqGetResume()
        if (response) {
          console.log("이력 조회 성공:", response.data)
          setResumeData(response.data) // Atom 갱신
        }
      } catch (error) {
        console.error("이력 조회 실패:", error.response?.data || error.message)
      }
    }
    fetchResumeData()
  }, [])
  useEffect(() => {
    const fetchUserJob = async () => {
      const response = await reqGetUserJob()
      if (response) {
        console.log(response.data.data)
        setUserJob(response.data.data)
      }
    }
    fetchUserJob()
  }, [])
  return (
    <BaseLayout>
      <Wrapper>
        <ProfileInfo>
          <ProfileImg src={userData.image_url} />
          <InfoGroup>
            <InfoText>
              <Highlight>{userData.nickname}</Highlight>님의 이력
            </InfoText>
            <InfoSubText>나의 이력을 추가하고 관리할 수 있어요</InfoSubText>
          </InfoGroup>
        </ProfileInfo>
        <FeedbackBtn onClick={createFeedback}>AI 피드백 받기</FeedbackBtn>
        <ContentWrapper>
          {/*사용자 이력 렌더링*/}
          {groupedData.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              onClickOption={onClickOption}
              selectedOption={selectedOption}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
            />
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
        {isModalOpen && <AddCareerPage setIsModalOpen={setIsModalOpen} />}
        {isFeedbackModalOpen && (
          <ModalOverlay>
            <ModalContent>
              <h3>AI 피드백</h3>
              <p>{feedbackData}</p>
              <button onClick={() => setIsFeedbackModalOpen(false)}>
                닫기
              </button>
            </ModalContent>
          </ModalOverlay>
        )}
      </Wrapper>
    </BaseLayout>
  )
}
