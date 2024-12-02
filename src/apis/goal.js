import apiClient from "./apiClient"
import {
  CATEGORIES,
  GOALS,
  RECOMMENDED_GOALS,
  RECOMMENDED_GOALS2,
} from "../constants/dummy"

export const reqGetGoals = async (params) => {
  const searchParams = new URLSearchParams(params)
  const res = await apiClient.get(`/goal?${searchParams}`)
  return {
    status: res.status,
    data: res.data.data.map((v) => ({
      id: v.member_goal_id,
      title: v.goal_title,
      isComplete: v.is_complete,
      category: v.category,
      startDate: v.start_date,
      completedDate: v.completed_date,
      isResume: v.is_resume,
      quests: v.quests.map((q) => ({
        id: q.id,
        title: q.title,
        isComplete: q.is_complete,
        deadline: q.deadline,
      })),
    })),
  }
}

export const reqGetGoal = async (id) => {
  const res = await apiClient.get(`/goal/${id}`)
  return {
    status: res.status,
    data: {
      id: res.data.data.member_goal_id,
      title: res.data.data.goal_title,
      isComplete: res.data.data.is_complete,
      category: res.data.data.category,
      startDate: res.data.data.start_date,
      completedDate: res.data.data.completed_date,
      isResume: res.data.data.is_resume,
      quests: res.data.data.quests.map((q) => ({
        id: q.id,
        title: q.title,
        isComplete: q.is_complete,
        deadline: q.deadline,
      })),
    },
  }
}

export const reqPostGoal = async (data) => {
  const body = {
    title: data.title,
    category: CATEGORIES.find((v) => v.value === data.category)?.label,
  }
  const res = await apiClient.post("/goal", body)
  return {
    status: res.status,
    data: {
      id: res.data.data.member_goal_id,
      title: res.data.data.goal_title,
      isComplete: res.data.data.is_complete,
      category: res.data.data.category,
      quests: [],
    },
  }
}

export const reqPatchGoal = async (id, data) => {
  const body = {
    title: data.title,
    category: CATEGORIES.find((v) => v.value === data.category)?.label,
  }
  const res = await apiClient.patch(`/goal/${id}`, body)
  return {
    status: res.status,
    data,
  }
}

export const reqDeleteGoal = async (id) => {
  return await apiClient.delete(`/goal/${id}`)
}

export const reqGetRecommendGoals = async () => {
  // return await apiClient.get(`/goal/recommend`);
  return {
    status: 200,
    data: Math.random() > 0.5 ? RECOMMENDED_GOALS : RECOMMENDED_GOALS2,
  }
}

export const reqCompleteGoal = async (id) => {
  return await apiClient.patch(`/goal/complete/${id}`)
}
