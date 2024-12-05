import Calendar from "react-calendar"
import styled from "styled-components"
import "react-calendar/dist/Calendar.css"
import { Checkbox, DatePicker } from "antd"

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  overflow: hidden;
`

export const StyledCalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;
  background: #000;
  padding: 30px 32px;
  border: none;
  .react-calendar__navigation {
    justify-content: center;
    margin-bottom: 50px;
  }
  .react-calendar__navigation__label {
    color: white;
    max-width: fit-content;
    padding: 0px 20px;
    font-size: 24px;
    font-family: "Pretendard";
    font-weight: 600;
  }
  .react-calendar__navigation__arrow {
    color: white;
    font-size: 24px;
    font-family: "Pretendard";
  }
  .react-calendar__navigation__label:disabled,
  .react-calendar__navigation__label:enabled:focus,
  .react-calendar__navigation__label:enabled:hover,
  .react-calendar__navigation__arrow:disabled,
  .react-calendar__navigation__arrow:enabled:focus,
  .react-calendar__navigation__arrow:enabled:hover {
    background: transparent;
  }
  .react-calendar__month-view__weekdays {
    color: white;
    font-family: "Pretendard";
    font-size: 15px;
    position: relative;
    margin-top: 50px;
  }
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
  }
  .react-calendar__tile {
    position: relative;
    aspect-ratio: 1/1;
    background: transparent !important;
  }
  .react-calendar__tile:enabled:focus:before,
  .react-calendar__tile:enabled:hover:before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    background: #1d5a40;
    z-index: 0;
    border-radius: 50%;
  }

  .react-calendar__tile--now:before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    z-index: 0;
    border-radius: 50%;
    background: #4d4d4d;
  }

  .react-calendar__tile abbr {
    position: relative;
    color: #c3c3c3;
  }
  .react-calendar__tile:enabled:focus abbr,
  .react-calendar__tile:enabled:hover abbr {
    color: white;
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
  background-color: rgba(32, 48, 55, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.form`
  display: flex;
  width: 270px;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`

export const ModalInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  font-family: "Pretendard";
  font-size: 16px;
  border: 1px solid #333;
  border-radius: 10px;
  background: #262827;
  color: white;
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
  top: 37px;
  right: 40px;
  background: #2f2f2f;
  color: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #3d3d3d;
  }

  &:active {
    background: #1f1f1f;
  }
`

export const StyledDatePicker = styled(DatePicker)`
  width: "50%";
  background: "#262827";
  border: "none";
  color: "white";

  .ant-picker-suffix {
    color: white !important;
  }
`

export const StyledRangePicker = styled(DatePicker.RangePicker)`
  &&& {
    width: 100%;
    font-family: "Pretendard";
    background-color: #262827;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 8px 12px;
    .ant-picker-input > input {
      color: white !important;
      border: none;
      outline: none;
    }
    .ant-picker-suffix {
      color: white !important;
    }
    &:hover {
      border: none;
    }
  }
`

export const GlobalStyle = styled.div`
  .ant-picker-dropdown {
    width: 50% !important;
    max-width: unset !important;
    min-width: 50px !important;
    background-color: #262827 !important;
  }

  .ant-picker-panel-container {
    background-color: #262827 !important;
  }

  .ant-picker-cell-inner {
    color: white !important;
  }

  .ant-picker-cell-inner:hover {
    background-color: #3d3f40 !important;
  }

  .ant-picker-footer {
    background-color: #262827 !important;
  }
`
