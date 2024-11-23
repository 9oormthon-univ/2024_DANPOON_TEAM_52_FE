import axios from "axios";
import { AUTH_ACCESS_TOKEN } from "../constants/auth";

export const apiClient = axios.create();

export function ApiClientSetting() {
  apiClient.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
  apiClient.defaults.headers.common["Content-Type"] = "application/json";

  apiClient.interceptors.request.use(config => {
    config.headers.Authorization = `${window.localStorage.getItem(AUTH_ACCESS_TOKEN)}`;
    return config;
  })

  apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.message) alert(error.message);
      return Promise.reject(error);
    }
  );

  return <></>;
}

export default apiClient;