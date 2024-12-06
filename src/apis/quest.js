import apiClient from "./apiClient"
import { RECOMMENDED_QUESTS, RECOMMENDED_QUESTS2 } from "../constants/dummy"

export const reqGetQuests = async (params) => {
  const searchParams = new URLSearchParams(params)
  return await apiClient.get(`/quest?${searchParams}`)
}

export const reqPostQuest = async (data) => {
  const body = {
    goal_id: data.goalId,
    title: data.title,
    deadline: data.deadline,
  }
  const res = await apiClient.post("/quest", body)
  return {
    status: res.status,
    data: res.data.data,
  }
}

export const reqDeleteQuest = async (questId) => {
  return await apiClient.delete(`/quest/${questId}`)
}

export const reqPatchQuest = async (id, data) => {
  const body = {
    title: data.title,
    deadline: data.deadline,
    is_complete: data.isComplete,
  }
  const res = await apiClient.patch(`/quest/${id}`, body)
  return {
    status: res.status,
    data: {
      id,
      ...data,
    },
  }
}

export const reqGetRecommendQuests = async () => {
  const res = await apiClient.get(`/goal/recommend`);
  return {
    status: res.status,
    data: res.data.data.items
  }
}
