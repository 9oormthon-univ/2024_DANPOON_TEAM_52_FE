import apiClient from "./apiClient"

export const reqPostFcm = async (token) => {
  const body = {
    fcm_token: token
  }
  const res = await apiClient.patch("/fcm", body)
  return {
    status: res.status,
    data: res.data.data,
  }
}