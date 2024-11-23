import { styled } from "styled-components"
import { Button as ButtonComponent } from "antd"

const Button = styled(ButtonComponent)`
  &&& {
    height: auto;
    border-radius: 28px;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    border: none;
    padding: 15px 0;
    background: ${({ $variant }) => {
      switch ($variant) {
        case "primary":
          return "linear-gradient(90deg, #E0FFC6 -16.96%, #8AFAF1 126.4%)"
        case "secondary":
          return "#2F2F2F"
        default:
          return "#FFFFFF"
      }
    }} !important;
    color: ${({ $variant }) =>
      $variant === "secondary" ? "#FFFFFF" : "#000000"} !important;
    transition: all 0.5s;
    &:hover {
      filter: ${({ $variant }) => {
        switch ($variant) {
          case "primary":
          case "secondary":
            return "brightness(1.3)"
          default:
            return "brightness(0.8)"
        }
      }} !important;
    }
  }
`
export default Button
