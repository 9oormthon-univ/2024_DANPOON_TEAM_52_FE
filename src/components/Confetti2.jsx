import styled from "styled-components"
import Lottie from "lottie-react"
import LottieConfetti from "../lotties/confetti2.json"

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 80%;
  height: 60%;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 101;
`

export default function Confetti2() {
  return (
    <Container>
      <Lottie animationData={LottieConfetti} loop={false} />
    </Container>
  )
}
