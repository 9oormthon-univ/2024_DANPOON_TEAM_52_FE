import feedbackAtom from "../../../store/atoms/feedback"
import { useRecoilState } from "recoil"
import { useEffect, useState } from "react"
import { reqGetFeedback, reqPostFeedback } from "../../../apis/feedback"
import AIFeedBackModal from "./AiModal"
export default function AiFeedBack({ isFeedBack, setIsFeedBack }) {
  const [feedback, setFeedBack] = useRecoilState(feedbackAtom)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const feedbackData = await reqGetFeedback()
        if (feedbackData) {
          setFeedBack(feedbackData)
        } else {
          setIsLoading(true)
          const newFeedBack = await reqPostFeedback()
          setFeedBack(newFeedBack)
        }
      } catch (error) {
        console.error("피드백 조회 실패:", error)
        setIsLoading(false)
      }
    }
    fetchFeedback()
  }, [])
  return (
    <AIFeedBackModal
      open={isFeedBack}
      onClose={() => setIsFeedBack(false)}
      text={feedback}
      setText={setFeedBack}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    />
  )
}
