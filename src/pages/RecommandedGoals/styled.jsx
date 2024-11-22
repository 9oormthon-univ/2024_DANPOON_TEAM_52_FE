import { styled } from "styled-components"
import TypoComponent from "../../components/Typo"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 20px 20px;
  gap: 42px;
  overflow-x: visible;
  overflow-y: hidden;
`
export const Title = styled(TypoComponent.Title)`
  margin-left: 12px;
`

export const RecommendedGoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-left: -20px;
  flex: 1;
  justify-content: center;
  overflow: visible;
  position: relative;
`

export const GradientBackground = styled.div`
  position: absolute;
  top: calc(50% - 50px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  flex-shrink: 0;
  background: linear-gradient(
    106deg,
    rgba(141, 243, 212, 0.8) 23.89%,
    rgba(138, 250, 241, 0.8) 64.09%
  );
  filter: blur(73.30000305175781px);
  z-index: 0;
`
