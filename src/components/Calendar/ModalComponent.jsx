import React from "react";
import { ModalOverlay, ModalContent, ModalInput, ModalButtonGroup, ModalButton,SingleCheckbox, StyledRangePicker } from "../../pages/Calendar/styled";
import { DatePicker } from "antd";
import { useState } from "react";
const ModalComponent = ({
  isModalOpen,
  onClose,
  newEvent,
  onTitleChange,
  setIsModalOpen,
  handleSaveEvent,
}) => {
  if (!isModalOpen) return null;
  const [isSingleDate, setIsSingleDate] = useState(false);
  const handleChecked = (event) =>{
    setIsSingleDate(event.target.checked);
  }
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>일정 추가하기</h3>
        <ModalInput
          value={newEvent.title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
        <div style={{display:"flex", width:"100%",justifyContent:"center", gap:"10px", marginTop:"20px"}}>
          {isSingleDate ? (
            <DatePicker
            style={{width:"100%", background:"#262827", border:"none",color:"white"}}
            placeholder="날짜"
            onChange={(event)=>{handleSaveEvent(event, setIsModalOpen)}}
            format="YYYY.MM.DD"
          />):(<StyledRangePicker></StyledRangePicker>)}
        </div>
        <SingleCheckbox style={{position:"relative", top:"10px", right:"40%",color:"white"}} onChange={handleChecked}>단일</SingleCheckbox>
        <ModalButtonGroup>
          <ModalButton onClick={onClose}>취소</ModalButton>
          <ModalButton onClick={()=>{console.log(newEvent)}} disabled={!newEvent.startDate || !newEvent.endDate}>
            추가
          </ModalButton>
        </ModalButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalComponent;
