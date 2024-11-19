import styled from "styled-components"
import { Title, Text } from "../../components/Typo"
import Button from "../../components/Button"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  margin-left: 20px;
  margin-bottom: 63px;
`

export const MainTitle = styled(Title)`
  &&& {
    margin: 0px;
  }
`

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: 0px 10px;
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
  border-radius: 10px;
  padding: 10px 5px;
  width: calc(33.333% - 10px);
  font-family: Pretendard;
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
  font-family: Pretendard;
  font-size: 18px;
`
