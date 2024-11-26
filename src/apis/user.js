import apiClient from "./apiClient";

//유저 프로필사진, 닉네임 조회
export const reqGetUser = async () => {
      const response = await apiClient.get("/member");
      return response.data; // 필요한 데이터만 반환
}

//사용자정보수정 /api/member patch

//이력조회(resumeData)
export const reqGetResume = async () => {
      const response = await apiClient.get("/resume");
      return response.data;
}

//이력수정 /api/resume/{resumeId}

//이력삭제 