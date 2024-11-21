import axios from "axios";
import { ROUTES_PATH_LOGIN } from "../constants/routes";
import { AUTH_TOKEN_KEY } from "../constants/auth";
import { useNavigate } from "react-router-dom";

export const apiClient = axios.create();

export function ApiClientSetting() {
  const navigate = useNavigate();

  apiClient.defaults.baseURL = '/api';
  apiClient.defaults.headers.common["Content-Type"] = "application/json";
  apiClient.defaults.headers.common.token = `${window.localStorage.getItem(AUTH_TOKEN_KEY)}`;

  apiClient.interceptors.response.use(
    (response) => {
      if (response.data.code !== 200) {
        localStorage.removeItem(AUTH_TOKEN_KEY);
        navigate(ROUTES_PATH_LOGIN);
        if (response.data.message) alert(response.data.message);
        return Promise.reject(new Error(response.data.message));
      }
      return response;
    },
    (error) => {
      if (error.message) alert(error.message);
      return Promise.reject(error);
    }
  );

  return <></>;
}