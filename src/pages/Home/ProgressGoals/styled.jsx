import styled from "styled-components"
import ButtonComponent from "../../../components/Button"
import SelectComponent from "../../../components/Select"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding: 0px 0px 20px;
  overflow: hidden;
`

export const listContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  justify-content: start;
  padding: 40px 0;
`

export const ModalContent = styled.form`
  display: flex;
  width: 270px;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`

export const Select = styled(SelectComponent)`
  width: 100%;
`

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 10px;
`

export const StyledButton = styled(ButtonComponent)`
  flex: 1;
  &&& {
    padding: 10px;
  }
`
