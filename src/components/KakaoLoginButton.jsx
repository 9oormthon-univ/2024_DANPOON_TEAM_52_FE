import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ROUTES_PATH_HOME } from "../constants/routes"

const Button = styled.button`
  width: 100%;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

const ButtonImg = styled.img`
  width: 100%;
`

export default function KakaoLoginButton() {
  const navigate = useNavigate()
  const kakaoLogin = () => {
    navigate(ROUTES_PATH_HOME)
  }
  return (
    <Button type="button" onClick={kakaoLogin}>
      <ButtonImg src="/imgs/kakao_login.png" />
    </Button>
  )
}
