import apiClient from "./apiClient";
import { RECOMMENDED_QUESTS, RECOMMENDED_QUESTS2 } from "../constants/dummy";

export const reqGetQuests = async (params) => {
  const searchParams = new URLSearchParams(params);
  return await apiClient.get(`/quest?${searchParams}`);
}

export const reqPostQuest = async (data) => {
  // return await apiClient.post("/quest", data);
  return {
    status: 201,
    data: {
      ...data,
      id: new Date().getTime(),
    }
  }
}

export const reqDeleteQuest = async (goalId, questId) => {
  return await apiClient.delete(`/quest/${questId}/goal/${goalId}`);
}

export const reqPatchQuest = async (id, data) => {
  // return await apiClient.patch(`/quest/${id}`, data);
  return {
    status: 200,
    data: {}
  }
}

export const reqGetRecommendQuests = async () => {
  // return await apiClient.get(`/quest/recommend`);
  return {
    status: 200,
    data: Math.random() > 0.5 ? RECOMMENDED_QUESTS : RECOMMENDED_QUESTS2
  }
}