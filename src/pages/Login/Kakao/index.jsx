import Loading from "../../../components/Loading"
import { useSearchParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { reqLogin } from "../../../apis/auth"
import { AUTH_ACCESS_TOKEN, AUTH_REFRESH_TOKEN } from "../../../constants/auth"
import { ROUTES_PATH_ONBOARD } from "../../../constants/routes"

export default function Kakao() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const authorizationCode = searchParams.get("code")
  const kakaoServerError = searchParams.get("error")

  const loginHandler = async (code) => {
    const res = await reqLogin({ authorizationCode })
    if (res.status === 200) {
      localStorage.setItem(
        AUTH_ACCESS_TOKEN,
        res.data.data.auth_token.access_token
      )
      localStorage.setItem(
        AUTH_REFRESH_TOKEN,
        res.data.data.auth_token.refresh_token
      )
      localStorage.setItem("nickname", res.data.data.nickname)
      navigate(ROUTES_PATH_ONBOARD)
    } else {
      localStorage.removeItem(AUTH_ACCESS_TOKEN)
      localStorage.removeItem(AUTH_REFRESH_TOKEN)
      alert("카카오 로그인에 실패했습니다.")
    }
  }

  useEffect(() => {
    if (authorizationCode) {
      loginHandler(authorizationCode)
    } else if (kakaoServerError) {
      alert("카카오 로그인에 실패했습니다.")
      console.error(kakaoServerError)
    }
  }, [])

  return <Loading />
}
