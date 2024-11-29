import dayjs from "dayjs"

export const formatFullDateKorean = (date) => {
  return dayjs(date).format("YYYY년 MM월 DD일")
}