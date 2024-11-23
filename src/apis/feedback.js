import apiClient from "./apiClient";

//피드백 생성
export const reqGetFeedback= async () => {
      const response = await apiClient.post("/member/ai");
      return response.data; // 필요한 데이터만 반환
}
