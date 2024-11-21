import React from "react";
import { ModalOverlay, ModalContent, ModalInput, ModalButtonGroup, ModalButton } from "../../pages/Calendar/styled";
import { DatePicker } from "antd";

const ModalComponent = ({
  isModalOpen,
  onClose,
  newEvent,
  onTitleChange,
  onStartDateChange,
  onEndDateChange,
  onSave,
}) => {
  if (!isModalOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>일정 추가하기</h3>
        <ModalInput
          value={newEvent.title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="일정 제목"
        />
        <div>
          <DatePicker
            placeholder="시작 날짜"
            onChange={onStartDateChange}
            format="YYYY-MM-DD"
          />
          <DatePicker
            placeholder="종료 날짜"
            onChange={onEndDateChange}
            format="YYYY-MM-DD"
          />
        </div>
        <ModalButtonGroup>
          <ModalButton onClick={onClose}>취소</ModalButton>
          <ModalButton onClick={onSave} disabled={!newEvent.startDate || !newEvent.endDate}>
            추가
          </ModalButton>
        </ModalButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalComponent;