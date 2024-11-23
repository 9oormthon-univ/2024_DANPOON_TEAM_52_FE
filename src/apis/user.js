import apiClient from "./apiClient";

//유저 프로필사진, 닉네임 조회
export const reqGetUser = async () => {
      const response = await apiClient.get("/member");
      return response.data; // 필요한 데이터만 반환
}
