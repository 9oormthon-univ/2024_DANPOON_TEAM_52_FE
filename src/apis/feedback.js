import apiClient from "./apiClient"

//피드백 생성
export const reqPostFeedback = async () => {
  const response = await apiClient.post("/member/ai")
  return response.data.data // 필요한 데이터만 반환
}

//피드백 조회
export const reqGetFeedback = async () => {
  const response = await apiClient.get("/member/ai")
  if (response.status === 200) {
    console.log(response.data)
  }
  return response.data.data.ai_feedback // 필요한 데이터만 반환
}
