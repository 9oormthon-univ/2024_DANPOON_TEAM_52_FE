import { useSearchParams, useNavigate } from "react-router-dom"
import { useState } from "react"

export function useStepNavigation() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const step = searchParams.get("step") || "1"
  const paramsJobItem = searchParams.get("jobItem") || ""
  const paramsInterestItem = searchParams.get("interestItem") || ""

  const updateStep = (nextStep, jobItem) => {
    setSearchParams({
      step: nextStep,
      jobItem: jobItem,
      interestItem: paramsInterestItem,
    })
  }

  return {
    step,
    paramsJobItem,
    paramsInterestItem,
    updateStep,
    navigate,
    setSearchParams,
  }
}
