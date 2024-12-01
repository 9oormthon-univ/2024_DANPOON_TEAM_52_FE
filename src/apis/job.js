import apiClient from "./apiClient"
//전체직무조회(jobData)
export const reqGetJob = async () => {
  const response = await apiClient.get("/job")
  console.log(response.data.data)
  return response.data.data
}
//사용자 상세 직무 추가
export const reqPostJob = async (item, navigate) => {
  try {
    const response = await apiClient.put("/job/member", {
      ids: item,
    })
    if (response.status === 200) {
      console.log("직무추가 성공:", response.data)
      if (localStorage.getItem("backURL")) {
        navigate("/setting")
      } else {
        navigate("/home")
      }
    }
    return response
  } catch (error) {
    console.error("상세 직무 추가 실패!", error)
    throw error
  }
}

//사용자 직무 조회
export const reqGetUserJob = async () => {
  try {
    const response = await apiClient.get("/job/member")
    if (response.status === 200) {
      console.log("유저 직무 조회 성공:", response)
    }
    return response
  } catch (error) {
    console.error("유저 직무 조회 실패!", error)
    throw error
  }
}
