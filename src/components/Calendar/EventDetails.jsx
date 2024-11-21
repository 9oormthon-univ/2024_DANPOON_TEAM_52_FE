import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useDateFunc } from "../../hooks/useDateFunc"
import { useState } from "react"
const EventDetails = ({selectedDate,events, questData, setShowDetails}) => {
  const hasEvents = events.includes(selectedDate)
  const hasQuestDeadline = questData.includes(selectedDate)
  const handleDragEnd = (_, info) => {
    if (info.offset.y > 100) {
      // 100px 이상 아래로 드래그하면 닫힘
      setShowDetails(false);
    }
  }
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
        drag="y" // 세로 방향 드래그 활성화
        dragConstraints={{ top: 0, bottom: 300 }} // 드래그 범위 제한
        onDragEnd={handleDragEnd} // 드래그 완료 시 처리
        style={{
          width: "100%",
          height: "200px",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#262827",
          color: "white",
          padding: "20px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          boxShadow: "5px 10px 15px 10px rgba(138, 250, 241, 0.5)",
        }}
      >
        <div style={{fontSize:"19px", fontFamily:"Pretendard", fontWeight:"bold"}}>{selectedDate?.toString().split(" ")[2]}</div>
        <div style={{fontSize:"8x", fontFamily:"Pretendard", marginBottom:"15px"}}>{selectedDate?.toString().split(" ")[0]}</div>
        <ul>
          {hasEvents && <li>일정이 있습니다.</li>}
          {hasQuestDeadline && <li>퀘스트 마감 기한이 있습니다.</li>}
          {!hasEvents && !hasQuestDeadline && <li>일정이 없습니다.</li>}
        </ul>
      </motion.div>
    </AnimatePresence>
  )
}

export default EventDetails
