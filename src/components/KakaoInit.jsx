import { useEffect } from "react"

export default function KakaoInit() {
  const onLoad = () => {
    try {
      if (window.Kakao.isInitialized()) return
      window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY)
    } catch (e) {
      alert("Kakao API 연동에 실패했습니다.")
      console.log(e, process.env.REACT_APP_KAKAO_JS_KEY)
    }
  }
  useEffect(onLoad, [])
  return <></>
}
