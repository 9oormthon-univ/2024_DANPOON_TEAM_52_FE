import styled from "styled-components"
import Lottie from "lottie-react"
import LottieStar from "../../../lotties/OnboardStar.json"

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export default function LottieStarPage() {
  return (
    <Container>
      <Lottie animationData={LottieStar} />
    </Container>
  )
}
