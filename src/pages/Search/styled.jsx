import styled from "styled-components"
import { Radio } from "antd"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 20px 33px 0;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const IconButton = styled.button`
  background-color: #222;
  border: none;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
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
