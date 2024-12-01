import { useState } from "react"

export function useDateRange() {
  const [date, setDate] = useState(() => new Date())
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const getDatesInRange = (startDate, endDate) => {
    const date = new Date(startDate)
    const dates = []

    while (date <= new Date(endDate)) {
      dates.push(date.toLocaleDateString("en-CA")) // YYYY-MM-DD 형식으로 추가
      date.setDate(date.getDate() + 1) // 하루씩 증가
    }

    return dates
  }

  return {
    date,
    setDate,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    getDatesInRange,
  }
}
