export const popStateFunc = (step, jobItem, interestItem) => {
  window.addEventListener("popstate", (event) => {
    const searchParams = new URLSearchParams()
    // 조건에 따라 쿼리 파라미터 추가
    if (step) searchParams.append("step", parseInt(step) - 1)
    if (jobItem) searchParams.append("jobItem", jobItem)
    if (interestItem) searchParams.append("interestItem", interestItem)
    // URL에 파라미터를 추가하여 이동
    window.location.href = `/info?${searchParams.toString()}`
  })
}

//완료되지않은 세부 목표 갯수
export const subGoalLength = (item) => {
  const arr = item.filter((el) => el.isClear === false)
  return arr.length
}
