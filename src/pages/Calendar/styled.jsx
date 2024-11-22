import Calendar from "react-calendar"
import styled from "styled-components"
import "react-calendar/dist/Calendar.css"
import { Checkbox, DatePicker } from "antd"
export const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  font-family: "Pretendard";
  padding: 100px 30px;
  .react-calendar {
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 4px 2px 10px 0px rgba(0, 0, 0, 0.13);
    padding: 3% 5%;
    background-color: white;
  }

  .ant-picker-cell-selected .ant-picker-cell-inner {
    color: white; /* 텍스트 색상 */
    border-radius: 50%; /* 동그라미 모양 */
    width: 20px; /* 너비 설정 */
    height: 20px; /* 높이 설정 */
    display: flex; /* 중앙 정렬을 위한 flexbox 사용 */
    justify-content: center; /* 가로 정렬 */
    align-items: center; /* 세로 정렬 */
  }
    
  /* 전체 폰트 컬러 */
  .react-calendar__month-view {
    abbr {
      color: #c3c3c3;
      font-size: 15px;
    }
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: center;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 800;
    font-size: 24px;
    color: white;
  }

  /* 네비게이션 버튼 컬러 */
  .react-calendar__navigation button:focus {
    background-color: none;
  }

  /* 네비게이션 비활성화 됐을때 스타일 */
  .react-calendar__navigation button:disabled {
    background-color: white;
    color: ${(props) => props.theme.darkBlack};
  }

  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 500;
    color: white;
  }

  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    background: none;
    abbr {
      color: white;
    }
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    border-radius: 0.8rem;
    padding: 0;
  }

  /* 네비게이션 현재 월 스타일 적용 */
  .react-calendar__tile--hasActive {
    abbr {
      color: white;
    }
  }

  /* 일 날짜 간격 */
  .react-calendar__tile {
    position: relative;
    padding: 20px 10px;
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    flex: 0 0 calc(33.3333% - 10px) !important;
    margin-inline-start: 5px !important;
    margin-inline-end: 5px !important;
    margin-block-end: 10px;
    padding: 20px 6.6667px;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${(props) => props.theme.gray_1};
  }
`

export const StyledCalendar = styled(Calendar)`
  &&& {
    background: none;
  }
`

/* 오늘 날짜에 텍스트 삽입 스타일 */
export const StyledToday = styled.div`
  font-size: x-small;
  color: ${(props) => props.theme.br_2};
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`

/* 일정있는 날짜에 점 표시 스타일 */
export const StyledDot = styled.div`
  background-color: #8afaf1;
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: black;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  text-align: center;
  color: white;
  box-shadow: 1px 1px 13.7px 0px rgba(138, 250, 241, 0.3);
`

export const ModalInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  font-family: "Pretendard";
  margin-top: 10px;
  font-size: 16px;
  border: 1px solid #333;
  border-radius: 10px;
  background: #262827;
  color: white;
  text-align: center;
  &:focus {
    outline: none;
  }
`

export const SingleCheckbox = styled(Checkbox)`
  &&& {
    .ant-checkbox-inner {
      background-color: #262827 !important;
      border: none;
    }
    .ant-checkbox-checked {
      background-color: #262827 !important;
      border: none !important;
    }
    .ant-checkbox {
      background-color: #262827 !important;
    }
  }
`
export const ModalButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`

export const ModalButton = styled.button`
  width: 50%;
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: "Pretendard";
`

export const AddScheduleButton = styled.button`
  position: absolute;
  top: 102px;
  right: 40px;
  background: #2f2f2f; /* 버튼 배경색 */
  color: white; /* 텍스트 색상 */
  border: none; /* 테두리 없음 */
  border-radius: 50%; /* 완전한 원 모양 */
  width: 35px; /* 버튼 크기 (너비) */
  height: 35px; /* 버튼 크기 (높이) */
  font-size: 24px; /* 텍스트 크기 */
  cursor: pointer; /* 마우스 커서 변경 */
  display: flex; /* 내용 중앙 정렬을 위한 flexbox */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */

  &:hover {
    background: #3d3d3d; /* 호버 시 배경색 */
  }

  &:active {
    background: #1f1f1f; /* 클릭 시 배경색 */
  }
`

export const StyledDatePicker = styled(DatePicker)`
width:"50%", background:"#262827", border:"none", color:"white"

.ant-picker-suffix {
  color: white !important; /* 달력 아이콘 색상 */
}
`

export const StyledRangePicker = styled(DatePicker.RangePicker)`
  &&& {
    width: 100%;
    font-family: "Pretendard";
    background-color: #262827; /* 배경색 */
    color: white; /* 글씨 색상 */
    border: none; /* 테두리 제거 */
    border-radius: 8px; /* 둥근 모서리 */
    padding: 8px 12px;
    .ant-picker-input > input {
      color: white !important; /* 입력 글씨 색상 */
      border: none; /* 입력 필드 테두리 제거 */
      outline: none; /* 포커스 시 외곽선 제거 */
    }
    .ant-picker-suffix {
      color: white !important; /* 달력 아이콘 색상 */
    }
    &:hover {
      border: none; /* 호버 시 테두리 제거 */
    }
`

/* 드롭다운 스타일 강제 적용 */
export const GlobalStyle = styled.div`
  .ant-picker-dropdown {
    width: 50% !important; /* 드롭다운 너비를 RangePicker와 동일하게 설정 */
    max-width: unset !important; /* 기본 최대 너비 제한 제거 */
    min-width: 50px !important; /* 최소 너비를 RangePicker 너비로 설정 */
    background-color: #262827 !important; /* 드롭다운 배경색 */
  }

  .ant-picker-panel-container {
    background-color: #262827 !important; /* 패널 배경색 */
  }

  .ant-picker-cell-inner {
    color: white !important; /* 드롭다운 날짜 글씨 색상 */
  }

  .ant-picker-cell-inner:hover {
    background-color: #3d3f40 !important; /* 날짜 호버 시 배경색 */
  }

  .ant-picker-footer {
    background-color: #262827 !important; /* 드롭다운 하단 배경색 */
  }
`
