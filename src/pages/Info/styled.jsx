import styled from "styled-components"
import { Title, Text } from "../../components/Typo"
import Button from "../../components/Button"
import BackwardBtn from "../../components/BackwardButton"
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 0px 10px;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(78, 197, 199, 0.2) 0%,
    rgba(0, 0, 0, 0) 70%
  );
`

export const Content = styled.div`
  margin-left: 30px;
  margin-bottom: 63px;
`

export const MainTitle = styled(Title)`
  &&& {
    margin: 0px;
  }
`

export const GridWrapper = styled.div`
  height: 40vh;
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: left;
  padding: 0px 10px;
  align-content: start;
`

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GradientOverlay = styled.div``

export const ItemBtn = styled.button`
  background: ${({ isSelected }) => (isSelected ? "#184149" : "#3B3B3B")};
  color: white;
  text-align: center;
  border: none;
  border-radius: 15px;
  padding: 12px 5px;
  width: calc(33.333% - 10px);
  font-family: "Pretendard";
`

export const NextBtn = styled(Button)`
  &&& {
    width: 90%;
    height: 50px;
    margin-top: 99px;
  }
`

export const Option = styled.div`
  color: #747474;
  font-weight: bold;
  font-family: "Pretendard";
  font-size: 15px;
`

export const BackBtn = styled(BackwardBtn)`
  margin-left: 20px;
  margin-bottom: 30px;
`
