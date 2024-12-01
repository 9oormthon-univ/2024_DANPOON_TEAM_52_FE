import styled from "styled-components"
import Lottie from "lottie-react"
import LottieQuest from "../../../lotties/OnboardQuest.json"

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export default function LottieQuestPage() {
  return (
    <Container>
      <Lottie animationData={LottieQuest} />
    </Container>
  )
}
