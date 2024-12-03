import axios from "axios"
import { AUTH_ACCESS_TOKEN, AUTH_REFRESH_TOKEN } from "../constants/auth"

export const apiClient = axios.create()

export function ApiClientSetting() {
  apiClient.defaults.baseURL = process.env.REACT_APP_API_BASE_URL
  apiClient.defaults.headers.common["Content-Type"] = "application/json"

  apiClient.interceptors.request.use((config) => {
    if (config.url !== "/auth/kakao")
      config.headers.Authorization = `${window.localStorage.getItem(AUTH_ACCESS_TOKEN)}`
    return config
  })

  apiClient.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        alert("로그인이 만료되었습니다. 다시 로그인해주세요.")
        window.localStorage.removeItem(AUTH_ACCESS_TOKEN)
        window.localStorage.removeItem(AUTH_REFRESH_TOKEN)
        window.location.href = "/login"
      }
      else if (error.message) alert(error.message)
      return Promise.reject(error)
    }
  )

  return <></>
}

export default apiClient
