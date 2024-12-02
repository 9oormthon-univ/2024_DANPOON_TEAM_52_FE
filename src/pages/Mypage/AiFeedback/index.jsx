import styled from "styled-components"
import AIFeedbackLoading from "../../../components/AIFeedbackLoading"
import feedbackAtom from "../../../store/atoms/feedback"
import { useRecoilState } from "recoil"
import { useEffect, useState } from "react"
import { reqGetFeedback, reqPostFeedback } from "../../../apis/feedback"
import { ReactComponent as StarIcon } from "../../../svgs/star2.svg"
import { ReactComponent as Swap } from "../../../svgs/Swap.svg"
import Confetti from "../../../components/Confetti"
import Star from "../../../components/Star"
export default function AiFeedBack({ setIsFeedBack }) {
  const [feedback, setFeedBack] = useRecoilState(feedbackAtom)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const feedbackData = await reqGetFeedback()
        if (feedbackData) {
          setFeedBack(feedbackData)
        } else {
          setIsLoading(true)
          const newFeedBack = await reqPostFeedback()
          setFeedBack(newFeedBack)
        }
      } catch (error) {
        console.error("피드백 조회 실패:", error)
        setIsLoading(false)
      }
    }
    fetchFeedback()
  }, [])
  const onClickRefresh = async () => {
    try {
      setIsLoading(true)
      const newFeedBack = await reqPostFeedback()
      console.log(newFeedBack)
      setFeedBack(newFeedBack)
      if (newFeedBack) {
        setIsLoading(false)
      }
    } catch (error) {
      console.error("피드백 재생성 실패:", error)
      setIsLoading(false)
    }
  }

  // **bold text**를 <strong>bold text</strong>로 변환
  const formatFeedback = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  }

  return (
    <ModalOverlay
      onClick={() => {
        setIsFeedBack(false)
      }}
    >
      {!isLoading && (
        <StarContainer
          onClick={(e) => {
            onClickRefresh()
            e.stopPropagation() // 이벤트 전파 차단
          }}
        >
          <Star />
          <Confetti />
        </StarContainer>
      )}
      <ModalContent
        onClick={(e) => {
          e.stopPropagation() // 이벤트 전파 차단
        }}
      >
        {isLoading && (
          <div>
            <AIFeedbackLoading />
          </div>
        )}
        {!isLoading && (
          <div>
            <Confetti></Confetti>
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  width: "90%",
                  fontFamily: "Pretendard",
                  fontSize: "16px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                <StarIcon /> AI 피드백이 작성되었어요
              </div>
              <Swap />
            </div>
            <div
              style={{
                fontSize: "12px",
                fontFamily: "Pretendard",
                lineHeight: "1.8",
                whiteSpace: "pre-line",
              }}
              dangerouslySetInnerHTML={{ __html: formatFeedback(feedback) }}
            ></div>
          </div>
        )}
      </ModalContent>
    </ModalOverlay>
  )
}
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(32, 48, 55, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const ModalContent = styled.div`
  background: black;
  padding: 30px 40px;
  border-radius: 20px;
  width: 80%;
  height: 500px;
  max-width: 400px;
  color: white;
  position: absolute;
  z-index: 0;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: 10px;
  scrollbar-color: #888 #444;

  &::-webkit-scrollbar {
    width: 12px;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #444;
  }
`
const StarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  bottom: 340px;
  height: 300px;
  width: 100%;
  overflow: visible;
  background: radial-gradient(
    50% 70% at 50% 130%,
    #40af7f77 0%,
    #40af7f77 20%,
    #40af7f00 50%,
    #40af7f00 100%
  );
  z-index: 1;
`
