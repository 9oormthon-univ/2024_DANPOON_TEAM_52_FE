import { styled } from "styled-components"
import TypoComponent from "../../components/Typo"
import { Link as LinkComponent } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 20px 20px;
  overflow: hidden;
`
export const Title = styled(TypoComponent.Title)`
  margin: 42px 0 42px 12px;
`

export const Description = styled(TypoComponent.Text)`
  margin-left: 12px;
  &&& {
    font-size: 13px;
    color: #c3c3c3;
    font-weight: 400;
  }
`

export const Link = styled(LinkComponent)`
  &&& {
    position: relative;
    color: #8afaf1;
    text-decoration: none;
    &:after {
      position: absolute;
      top: calc(100% + 2px);
      left: 0;
      content: "";
      width: 100%;
      border-bottom: 0.5px solid #8afaf1;
    }
  }
`

export const RecommendedGoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 576px;
  transform: translateX(-20px);
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
