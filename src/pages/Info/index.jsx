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
  //Promise가 아닌 resolved 데이터만 전달
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
          detailJob={detailJob}
        ></SetInterest>
      )}
    </>
  )
}
