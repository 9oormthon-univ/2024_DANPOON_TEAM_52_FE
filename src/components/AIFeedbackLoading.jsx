import styled from "styled-components"
import Lottie from "lottie-react"
import LottieAiFeedback from "../lotties/ai-feedback.json"

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export default function AIFeedbackLoading() {
  return (
    <Container>
      <Lottie animationData={LottieAiFeedback} />
    </Container>
  )
}
