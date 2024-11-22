import React from "react";
import styled from "styled-components";
const LegendWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    @media (min-width: 573px) {
      left: 420px;
      bottom: 520px;
    }

    @media (max-width: 573px) {
      left: 48vw;
      top: 200px;
      width: 60vw;
    }
`;
const Legend = () => {
  return (
    <LegendWrapper>
      {/* 일정 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px", // 아이콘과 텍스트 간 간격
        }}
      >
        <div
          style={{
            background: "white", // 흰색
            width: "10px",
            height: "10px",
            borderRadius: "50%", // 동그라미 모양
          }}
        ></div>
        <span
          style={{
            fontSize: "11px",
            color: "white", // 텍스트 색상
            fontFamily: "Pretendard, sans-serif",
          }}
        >
          일정
        </span>
      </div>

      {/* 퀘스트 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px", // 아이콘과 텍스트 간 간격
        }}
      >
        <div
          style={{
            background: "#8AFAF1", // 퀘스트 색상
            width: "10px",
            height: "10px",
            borderRadius: "50%", // 동그라미 모양
          }}
        ></div>
        <span
          style={{
            fontSize: "11px",
            color: "white", // 텍스트 색상
            fontFamily: "Pretendard, sans-serif",
          }}
        >
          퀘스트
        </span>
      </div>
    </LegendWrapper>
  );
};

export default Legend;