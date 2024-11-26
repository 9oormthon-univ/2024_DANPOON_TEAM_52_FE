import apiClient from "./apiClient";
import { GOALS } from "../constants/dummy"

export const reqGetGoals = async (params) => {
  const searchParams = new URLSearchParams(params);
  // return await apiClient.get(`/goal?${searchParams}`);
  return {
    status: 200,
    data: GOALS
  };
}

export const reqPutGoal = async (data) => {
  return await apiClient.put("/goal", data);
}

export const reqDeleteGoal = async (id) => {
  return await apiClient.delete(`/goal/${id}`);
}

export const reqGetRecommendGoal = async () => {
  return await apiClient.get(`/goal/recommend`);
}