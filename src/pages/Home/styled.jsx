import { styled } from "styled-components"
import TypoComponent from "../../components/Typo"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: start;
  justify-content: start;
  padding: 30px 30px 0;
  overflow: hidden;
`

export const Title = styled(TypoComponent.Title)`
  &&& {
    margin-bottom: 12px;
    margin-left: 20px;
  }
`
export const Description = styled(TypoComponent.Text)`
  &&& {
    color: #c3c3c3;
    font-weight: 500;
    font-size: 13px;
    margin-bottom: 17px;
    margin-left: 20px;
  }
`
