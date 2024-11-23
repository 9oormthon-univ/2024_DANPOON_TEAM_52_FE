import apiClient from "./apiClient";

export const reqGetQuests = async (params) => {
  const searchParams = new URLSearchParams(params);
  return await apiClient.get(`/quest?${searchParams}`);
}

export const reqPostQuest = async (data) => {
  return await apiClient.post("/quest", data);
}

export const reqDeleteQuest = async (goalId, questId) => {
  return await apiClient.delete(`/quest/${questId}/goal/${goalId}`);
}

export const reqPatchQuest = async (data) => {
  return await apiClient.patch(`/quest`, data);
}

export const reqGetRecommendQuest = async () => {
  return await apiClient.get(`/quest/recommend`);
}