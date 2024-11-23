import apiClient from "./apiClient";

export const reqGetGoals = async (params) => {
  const searchParams = new URLSearchParams(params);
  return await apiClient.get(`/goal?${searchParams}`);
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