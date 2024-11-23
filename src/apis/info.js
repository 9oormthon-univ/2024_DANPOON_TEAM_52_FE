import apiClient from "./apiClient";

//전체직무조회(직무-관심분야)
export const allJob = async () => {
    try {
      const response = await apiClient.get("/auth/job");
      return response.data; // 필요한 데이터만 반환
    } catch (error) {
      console.error("직무 데이터를 가져오는 중 오류 발생:", error);
      throw error;
    }
  };