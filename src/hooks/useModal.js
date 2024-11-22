import { useState } from "react";

export function useModal() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const selectDate = (date) => {
    if (showDetails) {
      setShowDetails(false); // 모달 닫기
      setTimeout(() => {
        setSelectedDate(date); // 새로운 날짜 설정
        setShowDetails(true); // 모달 열기
      }, 100); // 애니메이션 딜레이와 일치
    } else {
      setSelectedDate(date);
      setShowDetails(true);
    }
  };

  return {
    showDetails,
    setShowDetails,
    selectedDate,
    setSelectedDate,
    selectDate,
  };
}