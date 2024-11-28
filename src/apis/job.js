import apiClient from "./apiClient";
//전체직무조회(jobData)
export const reqGetJob = async () => {
    const response = await apiClient.get("/job");
    console.log(response.data.data);
    return response.data.data;
}