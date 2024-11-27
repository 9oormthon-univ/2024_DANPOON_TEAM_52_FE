import apiClient from "./apiClient"
//캘린더 일정 조회
export const fetchTodo = async (month) => {
  try {
    const response = await apiClient.get(`/calendar/${month}`)
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
      console.log("일정 생성 성공:", response.data)
      window.location.reload();
    } else {
      console.error("일정 생성 실패:", response.status)
    }
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error)
  }
}


/*
{
    "success": true,
    "data": {
        "quest_response_dto_list": [],
        "schedule_response_dto_list": [
            {
                "schedule_id": 1,
                "start_date": "2024-11-22",
                "end_date": "2024-11-23",
                "content": "test"
            },
            {
                "schedule_id": 2,
                "start_date": "2024-11-22",
                "end_date": "2024-11-23",
                "content": "개발"
            }
        ]
    },
    "error": null
}
*/