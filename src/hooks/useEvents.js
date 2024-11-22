import { useState } from "react";
import { useDateRange } from "./useDateRange";

export function useEvents() {
  const [events, setEvents] = useState([
    {
      startDate: "2024-11-23",
      endDate: "2024-11-25",
      title: "Test",
    },
  ]);
  const questData = ["2024-11-22", "2024-11-24"]
  const { getDatesInRange } = useDateRange(); // 범위 계산 로직 사용

  const renderDotsForDate = (tileDate) => {
    const formattedDate =
      tileDate.date instanceof Date && !isNaN(tileDate.date)
        ? tileDate.date.toLocaleDateString("en-CA")
        : null;

    if (!formattedDate) return null;

    const matchingEvents = events.filter((event) => {
      const eventDates = getDatesInRange(event.startDate, event.endDate);
      return eventDates.includes(formattedDate);
    });

    const isQuestDate = questData.includes(formattedDate);

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
      );
    }

    return null;
  };

  return {
    events,
    setEvents,
    renderDotsForDate,
  };
}