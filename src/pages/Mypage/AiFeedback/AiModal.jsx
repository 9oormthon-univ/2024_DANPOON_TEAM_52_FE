import styled from "styled-components"
import Modal from "../../../components/Modal"
import Star from "../../../components/Star"
import { reqPostFeedback } from "../../../apis/feedback"
import { ReactComponent as SwapSVG } from "../../../svgs/Swap.svg"
import { ReactComponent as StarIcon } from "../../../svgs/star2.svg"
import Confetti from "../../../components/Confetti"
import AIFeedbackLoading from "../../../components/AIFeedbackLoading"

const StyledRefreshContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 10;
`

const StyledFeedbackText = styled.div`
  width: 90%;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`

const StyledFeedbackContent = styled.div`
  font-size: 12px;
  font-family: "Pretendard";
  line-height: 1.8;
  white-space: pre-line;
`

const ModalContent = styled.div`
  width: 270px;
  height: fit-content;
  display: flex;
  overflow: visible;
  flex-direction: column;
  gap: 10px;
  color: white;
  max-height: 50vh;
  overflow-y: auto;
`

const StarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  height: 20px;
  overflow: visible;
  background: radial-gradient(
    50% 140% at 50% 50%,
    #40af7f77 0%,
    #40af7f77 20%,
    #40af7f00 50%,
    #40af7f00 100%
  );
  border-radius: 50%;
  & > div:first-child {
    width: 270px;
    height: 300px;
    transform: translateY(53px);
  }
`

export default function AIFeedBackModal({
  open,
  onClose,
  text,
  isLoading,
  setIsLoading,
  setText,
}) {
  // **bold text**를 <strong>bold text</strong>로 변환
  const formatFeedback = (text) => {
    if (typeof text !== "string") {
      console.log(typeof text, "타입에러")
      return text
    }
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  }

  const onClickRefresh = async () => {
    try {
      setIsLoading(true)
      const newFeedBack = await reqPostFeedback()
      // Promise fulfilled 상태 확인(타입 에러 방지)
      if (newFeedBack && typeof newFeedBack.feedback === "string") {
        setText(newFeedBack.feedback)
      }
    } catch (error) {
      console.error("피드백 재생성 실패:", error)
    } finally {
      setIsLoading(false) // 로딩 종료
    }
  }

  return (
    <>
      <Modal open={open} onClose={onClose}>
        {!isLoading && (
          <>
            <StarContainer>
              <Star />
            </StarContainer>
            <ModalContent>
              <Confetti />
              <StyledRefreshContainer
                onClick={() => {
                  setIsLoading(true)
                  onClickRefresh()
                }}
              >
                <StyledFeedbackText>
                  <StarIcon /> AI 피드백이 작성되었어요
                </StyledFeedbackText>
                <SwapSVG width={20} height={20} />
              </StyledRefreshContainer>
              <StyledFeedbackContent
                dangerouslySetInnerHTML={{ __html: formatFeedback(text) }}
              ></StyledFeedbackContent>
            </ModalContent>
          </>
        )}
        {isLoading && <AIFeedbackLoading />}
      </Modal>
    </>
  )
}
