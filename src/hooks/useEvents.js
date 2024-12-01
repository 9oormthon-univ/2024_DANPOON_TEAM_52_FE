import { useRecoilValue } from "recoil"
import { useDateRange } from "./useDateRange"
import calendarAtom from "../store/atoms/todo"

export function useEvents() {
  const todo = useRecoilValue(calendarAtom) // Recoil에서 일정 데이터 가져오기
  const { getDatesInRange } = useDateRange() // 범위 계산 로직 사용

  const renderDotsForDate = (tileDate) => {
    const formattedDate =
      tileDate.date instanceof Date && !isNaN(tileDate.date)
        ? tileDate.date.toLocaleDateString("en-CA")
        : null

    if (!formattedDate) return null

    const schedules = todo?.schedule_response_dto_list || []
    const quests = todo?.quest_response_dto_list || []

    const matchingEvents = schedules.filter((event) => {
      const eventDates = getDatesInRange(event.start_date, event.end_date)
      return eventDates.includes(formattedDate)
    })

    const isQuestDate = quests.some((quest) => quest.deadline === formattedDate)

    if (matchingEvents.length > 0 || isQuestDate) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2px",
          }}
        >
          {matchingEvents.length > 0 && (
            <div
              style={{
                background: "white",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
              }}
            />
          )}
          {isQuestDate && (
            <div
              style={{
                background: "#8AFAF1",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
              }}
            />
          )}
        </div>
      )
    }

    return null
  }

  return {
    renderDotsForDate,
  }
}
