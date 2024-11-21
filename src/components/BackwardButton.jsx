import { styled } from "styled-components"
import { ReactComponent as Left } from "../svgs/Left.svg"
import { useNavigate } from "react-router-dom"

const StyledButton = styled.button`
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

export default function BackwardButton() {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <StyledButton onClick={goBack}>
      <Left />
    </StyledButton>
  )
}
