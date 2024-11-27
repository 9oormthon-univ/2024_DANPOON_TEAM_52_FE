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
          return "#212121"
        default:
          return "#3F3F3F"
      }
    }} !important;
    color: ${({ $variant }) =>
      $variant === "primary" ? "#000000" : "#ffffff"} !important;
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
    &:disabled {
      background: #212121 !important;
      color: #b3b3b3 !important;
      cursor: not-allowed;
    }
  }
`
export default Button
