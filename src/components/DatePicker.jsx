import styled from "styled-components"
import { DatePicker } from "antd"

const StyledDatePicker = styled(DatePicker)`
  display: flex;
  width: 100%;
  min-width: fit-content;
  background-color: #262827 !important;
  border: none;
  .ant-picker-input {
    input {
      color: #fff;
      padding-left: 10px;
      width: 95px;
    }
    input::placeholder {
      color: #7d7d7d;
    }
    .ant-picker-suffix {
      order: -1;
      svg {
        fill: #7d7d7d;
      }
    }
    .ant-picker-clear {
      display: none;
    }
  }
`

export default StyledDatePicker
