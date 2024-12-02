import apiClient from "./apiClient"
//캘린더 일정 조회
export const fetchTodo = async (year, month) => {
  try {
    const response = await apiClient.get(`/calendar/${year}/${month}`)
    return response.data // 필요한 데이터만 반환
  } catch (error) {
    console.error("일정 데이터를 가져오는 중 오류 발생:", error)
    throw error
  }
}

//캘린더 일정 추가
export const createSchedule = async (addData) => {
  try {
    const response = await apiClient.post("/schedule", addData)
    if (response.status === 200) {
      //console.log("일정 생성 성공:", response.data)
      window.location.reload()
    } else {
      console.error("일정 생성 실패:", response.status)
    }
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error)
  }
}

//캘린더 일정 삭제
export const deleteSchedule = async (scheduleId) => {
  const response = await apiClient.delete(`/schedule/${scheduleId}`)
  if (response.status === 200) {
    //alert("해당 일정을 삭제하였습니다.")
    window.location.reload()
  } else {
    console.error("일정 삭제 실패:", response.status)
  }
}

//캘린더 일정 수정
export const updateSchedule = async (scheduleId, updateData) => {
  const response = await apiClient.patch(`/schedule/${scheduleId}`, updateData)
  if (response.status === 200) {
    //alert("해당 일정을 수정하였습니다.")
    window.location.reload()
  } else {
    console.error("일정 수정 실패:", response.status)
  }
}
