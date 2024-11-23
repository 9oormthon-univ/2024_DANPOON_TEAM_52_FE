import styled from "styled-components"
import { Switch } from "antd";
export const StyledSwitch = styled(Switch)`
    &&&{
        background: #4d4d4d;
        & .ant-switch-handle::before{
        background: #000;
    }
    &&&.ant-switch-checked{
        background:#fff;
    }
`

export default StyledSwitch;