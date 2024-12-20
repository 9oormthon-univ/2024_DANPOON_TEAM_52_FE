import styled from "styled-components"
import { Radio } from "antd"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 30px 20px 0 30px;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 30px;
`
export const TitleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`

export const Description = styled.span`
  color: #c3c3c3;
  font-size: 13px;
  font-weight: 500;
`

export const IconButton = styled.div`
  position: relative;
  background-color: #222;
  border: none;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
`

export const CategoryContainer = styled.div`
  display: flex;
  width: 100vw;
  transform: translateX(-30px);
  padding: 0 30px;
  gap: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`

export const Category = styled(Radio.Group)`
  &&& {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  & .ant-radio-button-wrapper {
    background-color: #244240;
    border-radius: 5px;
    border: none;
    color: white !important;
    white-space: nowrap;
  }

  & .ant-radio-button-wrapper::before {
    display: none;
  }
  & .ant-radio-button-wrapper-checked {
    background-color: #43b6ae;
    color: black !important;
  }
`

export const ListTopHeader = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
`

export const OptionList = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  display: ${({ visible }) => (visible === "true" ? "flex" : "none")};
  flex-direction: column;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 15px 0px rgba(138, 250, 241, 0.25);
`
export const OptionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ selected }) => (selected ? "#43b6ae" : "white")};
  font-size: 12px;
  font-weight: 500;
  background: black;
  border: none;
  outline: none;
  padding: 10px 20px;
  margin: 0;
  cursor: pointer;
  white-space: nowrap;
  &:not(:last-child) {
    border-bottom: 1px solid #333;
  }
`
