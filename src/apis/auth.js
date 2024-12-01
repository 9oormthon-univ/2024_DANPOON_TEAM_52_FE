import apiClient from "./apiClient"

export const reqLogin = async ({ authorizationCode }) => {
  return await apiClient.post("/auth/kakao", {
    authorization_code: authorizationCode,
  })
}
