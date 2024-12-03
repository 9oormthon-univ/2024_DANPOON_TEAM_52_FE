import apiClient from "./apiClient"
//상대이력 조회
export const reqGetShareResume = async (memberId) => {
  const response = await apiClient.get(`/resume/${memberId}`)
  if (response.status === 200) {
    return response.data.data
  }
}
