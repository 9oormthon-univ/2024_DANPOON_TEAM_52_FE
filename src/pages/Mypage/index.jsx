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
  StyledButton,
  NaviWrapper,
  StyledPlus,
  CustomScrollContainer,
} from "./styled"
import { CheckModal } from "../../components/Modal"
import ShadowContainer from "../../components/ShadowContainer"
import { ReactComponent as Share } from "../../svgs/share.svg"
import { ReactComponent as Plus } from "../../svgs/plus.svg"
import { ReactComponent as Setting } from "../../svgs/Settings.svg"
import { Highlight } from "../../components/Typo"
import CategoryItem from "./CategoryItem"
import { useGroupedData } from "../../hooks/useMypage"
import { reqGetResume, reqGetUser } from "../../apis/user"
import resumeAtom from "../../store/atoms/resume"
import { useRecoilState, useRecoilValue } from "recoil"
import { reqGetUserJob } from "../../apis/job"
import userJobAtom from "../../store/atoms/userjob"
import AiFeedBack from "./AiFeedback"
import userAtom from "../../store/atoms/user"
export default function Mypage() {
  const [isEdit, setIsEdit] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isFeedBack, setIsFeedBack] = useState(false)
  const [resumeData, setResumeData] = useRecoilState(resumeAtom)
  const [userJob, setUserJob] = useRecoilState(userJobAtom)
  const [userData, setUserData] = useRecoilState(userAtom)
  const navigate = useNavigate()
  const groupedData = useGroupedData(resumeData)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isShareModal, setIsShareModal] = useState(false)
  const url = `${window.location.origin}/resume/${userData.member_id}`
  const onClickOption = (item) => {
    setSelectedOption(item)
    if (selectedOption === item) {
      setSelectedOption(null) // 동일한 항목 클릭 시 닫기
    } else {
      setSelectedOption(item) // 선택된 항목 설정
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 병렬로 API 호출
        const [resumeResponse, userJobResponse, userResponse] =
          await Promise.all([reqGetResume(), reqGetUserJob(), reqGetUser()])

        if (resumeResponse) {
          setResumeData(resumeResponse.data)
        }
        if (userJobResponse) {
          setUserJob(userJobResponse.data.data)
        }
        if (userResponse) {
          setUserData(userResponse.data)
          localStorage.setItem("nickname", userResponse.data.nickname)
        }
      } catch (error) {
        console.error(
          "데이터 조회 실패:",
          error.response?.data || error.message
        )
      }
    }

    fetchData()
  }, [])
  return (
    <BaseLayout>
      <Wrapper>
        <ProfileInfo>
          <ProfileImg src={userData.image_url} />
          <InfoGroup>
            <InfoText>
              <Highlight>
                {localStorage.getItem("nickname") || userData.nickname}
              </Highlight>
              님의 이력
            </InfoText>
            <InfoSubText>나의 이력을 추가하고 관리할 수 있어요</InfoSubText>
          </InfoGroup>
          <NaviWrapper>
            <StyledButton>
              <Share
                onClick={() => {
                  setIsShareModal(true)
                  navigator.clipboard.writeText(url).then(() => {})
                }}
              />
            </StyledButton>
            <StyledButton>
              <Setting
                onClick={() => {
                  navigate("/setting")
                }}
              />
            </StyledButton>
          </NaviWrapper>
        </ProfileInfo>
        <FeedbackBtn
          onClick={() => {
            setIsFeedBack(true)
          }}
        >
          AI 피드백 받기
        </FeedbackBtn>
        <ShadowContainer>
          <CustomScrollContainer>
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
          </CustomScrollContainer>
        </ShadowContainer>
        <StyledPlus onClick={() => setIsModalOpen(true)}>
          <Plus stroke="white" />
        </StyledPlus>
        {isModalOpen && (
          <AddCareerPage
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {isFeedBack && (
          <AiFeedBack
            isFeedBack={isFeedBack}
            setIsFeedBack={setIsFeedBack}
          ></AiFeedBack>
        )}
        <CheckModal
          open={isShareModal}
          onConfirm={() => {
            setIsShareModal(false)
          }}
          title="클립보드에 복사되었습니다"
          confirmText="확인"
        />
      </Wrapper>
    </BaseLayout>
  )
}
