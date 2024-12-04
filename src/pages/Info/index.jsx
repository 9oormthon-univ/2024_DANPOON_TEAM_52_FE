import SetJob from "./components/SetJob"
import SetInterest from "./components/SetInterest"
import { useStepNavigation } from "../../hooks/useStepNavigation"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { reqGetJob } from "../../apis/job"

export default function InfoPage() {
  const { step, paramsInterestItem, updateStep } = useStepNavigation()
  const navigate = useNavigate()
  const [jobData, setJobData] = useState(null)
  //세부관심직무(선택한 직무에 맞게 갱신)
  const [detailJob, setDetailJob] = useState()
  const onClickNext = (data) => {
    const backURL = localStorage.getItem("backURL")
    //jobItem주기
    updateStep("2", data)
    if (step == "2") {
      //환경설정과 온보딩 구분 목적
      if (backURL === "true") {
        navigate("/setting")
      } else if (backURL === "false") {
        navigate("/home")
      }
    }
  }
  useEffect(() => {
    const fetchJobList = async () => {
      const response = await reqGetJob()
      const jobArray = Object.entries(response.jobs).map(([key, id]) => ({
        category: key,
        id: id,
      }))
      setJobData(jobArray)
    }
    fetchJobList()
  }, [])

  return (
    <>
      {step === "1" && (
        <SetJob
          onClickNext={onClickNext}
          interestItem={paramsInterestItem}
          jobData={jobData}
          setDetailJob={setDetailJob}
        ></SetJob>
      )}
      {step === "2" && (
        <SetInterest
          interestItem={paramsInterestItem}
          onClickNext={onClickNext}
          setDetailJob={setDetailJob}
          detailJob={detailJob}
        ></SetInterest>
      )}
    </>
  )
}
