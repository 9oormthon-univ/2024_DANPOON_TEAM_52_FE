import styled from "styled-components"
import TypoComponent from "../../components/Typo"
import Button from "../../components/Button"
import { Link as LinkComponent } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 30px 20px;
`

export const Header = styled.header`
  display: flex;
  gap: 18px;
  margin-bottom: 24px;
`

export const HeaderFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`
export const Icon = styled.span`
  font-size: 19px;
`

export const Label = styled.span`
  color: #b3b3b3;
  font-size: 13px;
  font-weight: 500;
`
export const Title = styled(TypoComponent.Title)`
  &&& {
    font-size: 20px;
    font-weight: 600;
  }
`

export const CompleteButton = styled(Button)`
  &&& {
    width: 100%;
    margin-bottom: 45px;
    padding: 7px 0;
    font-size: 15px;
    font-weight: 500;
  }
`

export const Description = styled(TypoComponent.Text)`
  &&& {
    display: flex;
    width: 100%;
    gap: 6px;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    height: fit-content;
  }
`

export const SubDescription = styled(TypoComponent.Text)`
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

export const RightText = styled(TypoComponent.Text)`
  &&& {
    flex: 1;
    text-align: right;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
  }
`

export const QuestContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  overflow: hidden;
`
