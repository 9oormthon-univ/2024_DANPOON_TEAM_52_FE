import { useState } from "react"
import { useRecoilValue } from "recoil"
import calendarAtom from "../store/atoms/todo"
import { useDateRange } from "./useDateRange"

export function useModal() {
  const [showDetails, setShowDetails] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [eventsForDate, setEventsForDate] = useState([]) // 해당 날짜 일정 저장
  const todo = useRecoilValue(calendarAtom) // Recoil 데이터
  const { getDatesInRange } = useDateRange() // 날짜 범위 계산

  //클릭한 날짜에 해당하는 일정 조회 목적
  const selectDate = (date) => {
    // 해당 날짜와 일치하는 일정 가져오기
    const matchingEvents = todo.schedule_response_dto_list.filter((event) => {
      const eventDates = getDatesInRange(event.start_date, event.end_date)
      return eventDates.includes(date.toLocaleDateString("en-CA"))
    })

    setEventsForDate(matchingEvents) // 해당 날짜의 일정 저장

    if (showDetails) {
      setShowDetails(false) // 모달 닫기
      setTimeout(() => {
        setSelectedDate(date) // 새로운 날짜 설정
        setShowDetails(true) // 모달 열기
      }, 100) // 애니메이션 딜레이
    } else {
      setSelectedDate(date)
      setShowDetails(true)
    }
  }

  return {
    showDetails,
    setShowDetails,
    selectedDate,
    setSelectedDate,
    selectDate,
    eventsForDate, // 해당 날짜 일정
  }
}
