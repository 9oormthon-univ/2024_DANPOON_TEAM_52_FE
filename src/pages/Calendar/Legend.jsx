import React from "react"
import styled from "styled-components"

const LegendWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 140px;
  right: 35px;
`

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const LegendCircle = styled.div`
  background: ${(props) =>
    props.color || "white"}; // 동그라미 색상 (기본: 흰색)
  width: 10px;
  height: 10px;
  border-radius: 50%; // 동그라미 모양
`

const LegendText = styled.span`
  font-size: 14px;
  color: white; // 텍스트 색상
  font-family: "Pretendard", sans-serif;
`

const Legend = () => {
  return (
    <LegendWrapper>
      {/* 일정 */}
      <LegendItem>
        <LegendCircle color="white" />
        <LegendText>일정</LegendText>
      </LegendItem>

      {/* 퀘스트 */}
      <LegendItem>
        <LegendCircle color="#8AFAF1" />
        <LegendText>퀘스트</LegendText>
      </LegendItem>
    </LegendWrapper>
  )
}

export default Legend
