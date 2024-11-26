import styled from "styled-components"
import Lottie from "lottie-react"
import LottieConfetti from "../lotties/Confetti.json"

const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 101;
`

export default function Confetti() {
  return (
    <Container>
      <Lottie animationData={LottieConfetti} loop={false} />
    </Container>
  )
}
