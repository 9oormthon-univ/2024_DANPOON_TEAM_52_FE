import apiClient from "./apiClient";

//전체직무조회(직무-관심분야)
export const reqGetJobs = async () => {
      const response = await apiClient.get("/auth/job");
      return response.data; // 필요한 데이터만 반환
      }