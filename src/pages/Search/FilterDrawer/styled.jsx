import styled from "styled-components"
import ButtonComponent from "../../../components/Button"
import { motion } from "framer-motion"
import { ReactComponent as RightSVG } from "../../../svgs/Right.svg"
import { Radio, Checkbox } from "antd"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 26px 18px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 18px;
  margin-bottom: 40px;
  gap: 12px;
`
export const Title = styled.h2`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`

export const ListContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 18px;
  height: 70dvh;
`

export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 0;
  margin: 0;
  &:disabled {
    color: #b2b2b2;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const InitButton = styled(ButtonComponent)`
  flex: 1;
  &&& {
    padding: 10px 0;
  }
`
export const SaveButton = styled(ButtonComponent)`
  flex: 2;
  &&& {
    padding: 10px 0;
  }
`

export const RightIcon = styled(RightSVG)``
export const LeftIcon = styled(RightSVG)`
  transform: rotate(180deg);
`

export const RadioGroup = styled(Radio.Group)`
  &&& {
    display: flex;
    flex-direction: column;
    gap: 24px;

    .ant-radio {
      order: 1;
    }
    .ant-radio .ant-radio-inner::after {
      width: 22px;
      height: 22px;
      margin-block-start: -11px;
      margin-inline-start: -11px;
    }
    .ant-radio .ant-radio-inner {
      background-color: #7d7d7d;
      border: none;
    }
    .ant-radio-checked .ant-radio-inner {
      background-color: #0066ff;
      border: none;
    }
    .ant-radio-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .ant-radio-wrapper span:last-child {
      color: #b2b2b2;
      font-size: 16px;
      font-weight: 400;
      order: 0;
    }
    .ant-radio-wrapper-checked span:last-child {
      color: #fff;
    }
  }
`
export const CheckGroup = styled(Checkbox.Group)`
  &&& {
    display: flex;
    flex-direction: column;
    gap: 24px;

    .ant-checkbox {
      order: 1;
    }
    .ant-checkbox .ant-checkbox-inner {
      background-color: #7d7d7d;
      border: none;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #0066ff;
      border: none;
    }
    .ant-checkbox-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .ant-checkbox-wrapper span:last-child {
      color: #b2b2b2;
      font-size: 16px;
      font-weight: 400;
      order: 0;
    }
    .ant-checkbox-wrapper-checked span:last-child {
      color: #fff;
    }
  }
`
