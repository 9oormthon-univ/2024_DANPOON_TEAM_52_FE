import apiClient from "./apiClient";

//유저 프로필사진, 닉네임 조회
export const reqGetUser = async () => {
      const response = await apiClient.get("/member");
      return response.data; // 필요한 데이터만 반환
}

//사용자정보수정
export const reqUpdateUser = async (data) => {
  try {
    const response = await apiClient.patch(`/member`, data);
    console.log(response)
    return response;
  } catch (error) {
    console.error("유저정보 수정 실패:", error.response?.data || error.message);
    throw error; 
  }
};

//이력조회(resumeData)
export const reqGetResume = async () => {
      const response = await apiClient.get("/resume");
      return response.data;
}

//이력추가(/api/resume)
export const reqPostResume = async (newData) => {
      try {
        const response = await apiClient.post("/resume", newData); // JSON 데이터를 Body로 전달
        console.log(response);
        window.location.reload();
        return response;
      } catch (error) {
        console.error("요청 실패:", error.response?.data || error.message);
      }
};

//이력수정 /api/resume/{resumeId}
export const reqUpdateResume = async (id,item) => {
      try {
            const response = await apiClient.patch(`/resume/${id}`, item);
            console.log(response);
            window.location.reload();
            return response;
          } catch (error) {
            console.error("요청 실패:", error.response?.data || error.message);
          }
}

//이력삭제 
export const reqDeleteResume = async (item) => {
      try {
        const response = await apiClient.delete(`/resume/${item.resume_id}`);
        console.log("삭제 성공:", response.data);
        window.location.reload();
        alert("삭제되었습니다.");
      } catch (error) {
        console.error("삭제 실패:", error.response?.data || error.message);
        alert("삭제 실패! 다시 시도해주세요.");
      }
    };