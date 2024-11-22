import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  position: absolute;
  top: 20%; /* 기본적으로 화면의 20% 높이에서 위치 */
  left: 50%; /* 가운데 정렬 */
  transform: translate(-50%, 0); /* 수평 중앙 정렬 */
  color: white;
  font-family: "Pretendard", sans-serif;
  text-align: center;

  @media (min-width: 768px) {
    top: 20%; /* 태블릿 이상의 화면에서는 25% 위치 */
  }

  @media (max-width: 767px) {
    top: 20%; /* 모바일 화면에서는 더 아래로 */
  }

  @media (max-width: 480px) {
    top: 23%; /* 작은 화면일수록 더 아래로 */
  }
`;

const TodayMessage = ({ today, events }) => {
  // 오늘 날짜 계산
  const formattedToday = today.toISOString().split("T")[0]; // YYYY-MM-DD 형식

  // 오늘 일정 확인
  const todaysEvents = events.filter((event) => {
    const eventStart = new Date(event.startDate);
    const eventEnd = new Date(event.endDate);

    // 오늘 날짜가 startDate ~ endDate 범위에 포함되는지 확인
    return today >= eventStart && today <= eventEnd;
  });

  return (
    <MessageContainer>
      {todaysEvents.length > 0 ? (
        <p>
          {today.getDate()}일, 오늘 일정을 확인하세요!
        </p>
      ) : (
        <p>
          {today.getDate()}일, 오늘은 일정이 없어요
        </p>
      )}
    </MessageContainer>
  );
};

export default TodayMessage;