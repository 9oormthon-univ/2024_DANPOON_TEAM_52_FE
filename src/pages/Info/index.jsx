import SetJob from "./components/SetJob"
import SetInterest from "./components/SetInterest"
import { useStepNavigation } from "../../hooks/useStepNavigation"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { jobData } from "../../constants/data"
export default function InfoPage() {
  const { step, paramsInterestItem, updateStep } = useStepNavigation()
  const navigate = useNavigate()
  const [jobData, setJobData] = useState(null);
  const onClickNext = (data) => {
    //jobItem주기
    updateStep("2", data)
    if (step == "2") {
      //서버데이터 전송
      if (localStorage.getItem("backURL")) {
        navigate("/setting")
      } else {
        navigate("/home")
      }
    }
  }
    <>
      {step === "1" && (
        <SetJob
          onClickNext={onClickNext}
          interestItem={paramsInterestItem}
        ></SetJob>
      )}
      {step === "2" && (
        <SetInterest
          interestItem={paramsInterestItem}
          onClickNext={onClickNext}
        ></SetInterest>
      )}
    </>
}
