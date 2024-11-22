import styled from "styled-components"
import TypoComponent from "../../components/Typo"
import Button from "../../components/Button"

export const Container = styled.form`
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
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 14px;
  }
`

export const Highlight = styled(TypoComponent.Highlight)`
  font-weight: 500;
  font-size: 16px;
  font-weight: 500;
`

export const QuestContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  overflow: hidden;
`
