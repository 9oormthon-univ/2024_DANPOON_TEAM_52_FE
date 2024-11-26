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

export const reqPatchGoal = async (data) => {
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

export const reqGetRecommendGoal = async () => {
  return await apiClient.get(`/goal/recommend`);
}