import apiClient from "./apiClient"

//캘린더 일정 조회
export const fetchTodo = async (month) => {
  try {
    const response = await apiClient.get(`/calendar/${month}`)
    return response.data // 필요한 데이터만 반환
  } catch (error) {
    console.error("직무 데이터를 가져오는 중 오류 발생:", error)
    throw error
  }
}
//캘린더 일정 추가
export const createSchedule = async (content, startDate, endDate) => {
  try {
    const response = await apiClient.post("/schedule", {
      content: content,
      start_date: startDate,
      end_date: endDate,
    })
    if (response.status === 200) {
      console.log("일정 생성 성공:", response.data)
    } else {
      console.error("일정 생성 실패:", response.status)
    }
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error)
  }
}

