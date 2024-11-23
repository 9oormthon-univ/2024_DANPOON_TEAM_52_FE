import { Select } from "antd"
import styled from "styled-components"

const StyledSelect = styled(Select)`
  &&& .ant-select-selection-item {
    color: #fff !important;
  }
  &&& .ant-select-selector {
    background-color: #262827;
    border: none;
  }
  &&& svg {
    fill: #fff;
  }
`

export default StyledSelect
