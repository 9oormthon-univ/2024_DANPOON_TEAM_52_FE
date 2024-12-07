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
      sequence: v.sequence,
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
      sequence: res.data.data.sequence,
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
    category: data.category,
    quests: data.quests || [],
  }
  if (data.quests) body.quests = data.quests
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

export const reqPatchGoals = async (data) => {
  const body = data.map((v) => ({
    member_goal_id: v.id,
    sequence: v.sequence,
  }))
  return await apiClient.patch("/goal", body)
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
  const res = await apiClient.post(`/goal/recommend`);
  return {
    status: res.status,
    data: res.data.data.items.map((v) => ({
      id: v.goal_id,
      title: v.title,
      category: v.category,
      descriptions: v.descriptions
    }))
  }
}

export const reqCompleteGoal = async (id) => {
  return await apiClient.patch(`/goal/complete/${id}`)
}

export const reqGetSearchGoals = async (params) => {
  const searchParams = new URLSearchParams(params)
  const res = await apiClient.get(`/goal/search?${searchParams}`)
  return {
    status: res.status,
    data: res.data.data.content.map((v) => ({
      id: v.goal_id,
      title: v.title,
      category: v.category,
      description: `${v.count}명의 목표`,
    }))
  }
}

export const reqGetSearchGoal = async (id) => {
  const res = await apiClient.get(`/goal/search/${id}`)
  return {
    status: res.status,
    data: {
      category: res.data.data.category,
      title: res.data.data.goal_name,
      quests: res.data.data.quests.map((q) => ({
        title: q,
      })),
    },
  }
}