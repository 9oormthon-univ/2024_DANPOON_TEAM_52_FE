import { useSearchParams } from "react-router-dom"
import styled from "styled-components"
import { ROUTES_PATH_LOGIN_KAKAO } from "../constants/routes"

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
  max-width: 400px;
`

export default function KakaoLoginButton() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get("code")

  const kakaoLogin = () => {
    if (code) return
    if (!window.Kakao) return
    window.Kakao.Auth.authorize({
      redirectUri: `${process.env.REACT_APP_BASE_URL}${ROUTES_PATH_LOGIN_KAKAO}`,
    })
  }
  return (
    <Button type="button" onClick={kakaoLogin} disabled={!!code}>
      <ButtonImg src="/imgs/kakao_login.png" />
    </Button>
  )
}
