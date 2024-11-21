import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const EventDetails = ({ selectedDate, events, questData, onClose }) => {
  const hasEvents = events.includes(selectedDate)
  const hasQuestDeadline = questData.includes(selectedDate)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
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
        <h3>{selectedDate} 일정</h3>
        <ul>
          {hasEvents && <li>일정이 있습니다.</li>}
          {hasQuestDeadline && <li>퀘스트 마감 기한이 있습니다.</li>}
          {!hasEvents && !hasQuestDeadline && <li>일정이 없습니다.</li>}
        </ul>
        <button onClick={onClose}>닫기</button>
      </motion.div>
    </AnimatePresence>
  )
}

export default EventDetails
