import styled from "styled-components"
import Lottie from "lottie-react"
import LottieGradientBackground from "../lotties/gradient-background.json"

const Container = styled.div`
  position: fixed;
  display: flex;
  top: 50px;
  left: 0;
  width: 100vw;
  height: 100dvh;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  filter: blur(40px);
  & div {
    width: 100vw;
    height: 100dvh;
    opacity: 0.7;
  }
`

export default function Confetti() {
  return (
    <Container>
      <Lottie animationData={LottieGradientBackground} loop={true} />
    </Container>
  )
}
