import { useEffect } from "react"

export default function KakaoInit() {
  const onLoad = () => {
    try {
      if (!window.Kakao.isInitialized())
        window.Kakao.init("27f19f5792157dc73ae6a9b4cdc5b365")
    } catch (e) {
      alert("Kakao API initialization failed")
    }
  }
  useEffect(onLoad, [])
  return <></>
}
