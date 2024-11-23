import styled from "styled-components"
import { Checkbox } from "antd"

const CheckListItem = styled(Checkbox)`
  width: 100%;
  height: fit-content;
  padding: 20px;
  color: #fff;
  background-color: #2c2c2c;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 400;
  & .ant-checkbox-inner {
    background-color: #000;
    outline: none;
    border: none;
  }
  &&& .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #000 !important;
  }
  &&& .ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: #8afaf1;
  }
`

export default CheckListItem
