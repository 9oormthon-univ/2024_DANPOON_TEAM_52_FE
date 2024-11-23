import styled from "styled-components"
import { Text } from "../../../components/Typo"
import ScrollContainerComponent from "../../../components/ScrollContainer"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 30px 20px;
`
export const HorizontalContainer = styled.div`
  display: flex;
  gap: 24px;
`

export const StyledText = styled(Text)`
  color: white;
  font-size: 11px;
  font-weight: 400;
  margin-left: 10px;
`

export const ScrollContainer = styled(ScrollContainerComponent)`
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar-button:vertical:start:increment,
  &::-webkit-scrollbar-button:vertical:end:decrement {
    display: block;
    height: 30px;
  }
`

export const QuestsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 7px;
  overflow: hidden;
`

export const Qeust = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  border-radius: 10px;
  color: white;
  font-size: 13px;
  font-weight: 500;
  background-color: #15373d;

  &:first-child {
    margin-top: 30px;
  }
  &:last-child {
    margin-bottom: 30px;
  }
`
