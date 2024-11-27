import apiClient from "./apiClient";
import { GOALS, RECOMMENDED_GOALS, RECOMMENDED_GOALS2 } from "../constants/dummy"

export const reqGetGoals = async (params) => {
  const searchParams = new URLSearchParams(params);
  const res = await apiClient.get(`/goal?${searchParams}`);
  return {
    status: res.status,
    data: res.data.data.map(v => ({
      id: v.member_goal_id,
      title: v.goal_title,
      isComplete: v.is_complete,
      category: v.category,
      quests: v.quests.map(q => ({
        id: q.id,
        title: q.title,
        isComplete: q.is_complete,
      }))
    }))
  }
}

export const reqPostGoal = async (data) => {
  // return await apiClient.post("/goal", data);
  return {
    status: 201,
    data: {
      ...data,
      id: new Date().getTime(),
    }
  }
}

export const reqPatchGoal = async (id, data) => {
  // return await apiClient.patch("/goal", data);
  return {
    status: 200,
    data
  }
}

export const reqDeleteGoal = async (id) => {
  // return await apiClient.delete(`/goal/${id}`);
  return {
    status: 200,
  }
}

export const reqGetRecommendGoals = async () => {
  // return await apiClient.get(`/goal/recommend`);
  return {
    status: 200,
    data: Math.random() > 0.5 ? RECOMMENDED_GOALS : RECOMMENDED_GOALS2
  }
}