import { useSearchParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function useStepNavigation() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  // 현재 step, jobItem, interestItem 가져오기
  const step = searchParams.get("step") || "1"
  const paramsJobItem = searchParams.get("jobItem") || ""
  const paramsInterestItem = searchParams.get("interestItem") || ""

  // 파라미터 업데이트 함수
  const updateStep = (nextStep, jobItem) => {
    setSearchParams((prevParams) => {
      prevParams.set("step", nextStep)
      prevParams.set("jobItem", jobItem || "")
      return prevParams
    })
  }

  // 뒤로가기를 감지하고 파라미터를 동기화
  useEffect(() => {
    const handlePopState = () => {
      const updatedParams = new URLSearchParams(window.location.search)
      setSearchParams(updatedParams)
    }
    window.addEventListener("popstate", handlePopState)
    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [setSearchParams])

  return {
    step,
    paramsJobItem,
    paramsInterestItem,
    updateStep,
    navigate,
  }
}
