import React from "react"
import { useState } from "react"
export function useDateFunc() {
  const [date, setDate] = useState(new Date())
  const [events, setEvents] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)
  const questData = ["2024-11-22", "2024-11-24"]
  const handleSaveEvent = (newEvent) => {
    const range = []
    const start = new Date(newEvent.startDate)
    const end = new Date(newEvent.endDate || newEvent.startDate)
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      range.push(d.toISOString().split("T")[0])
    }
    setEvents((prev) => [...prev, ...range])
    setIsModalOpen(false)
  }
  //임시 퀘스트 데이터로 진행
  const renderDotsForDate = () => {
    const formattedDate = date.toISOString().split("T")[0]
    return (
      <>
        {events.includes(formattedDate) && (
          <div style={{ background: "white" }} />
        )}
        {questData.includes(formattedDate) && (
          <div style={{ background: "#8AFAF1" }} />
        )}
      </>
    )
  }
  return {
    date,
    selectedDate,
    events,
    questData,
    setSelectedDate,
    handleSaveEvent,
    renderDotsForDate,
    setDate,
  }
}
