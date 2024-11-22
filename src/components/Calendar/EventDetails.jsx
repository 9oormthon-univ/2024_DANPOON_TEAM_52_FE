import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useDateFunc } from "../../hooks/useDateFunc"
import { useState } from "react"
const EventDetails = ({ selectedDate, events, questData, setShowDetails }) => {
  const hasEvents = events.includes(selectedDate)
  const hasQuestDeadline = questData.includes(selectedDate)
  const handleDragEnd = (_, info) => {
    if (info.offset.y > 100) {
      // 100px 이상 아래로 드래그하면 닫힘
      setShowDetails(false)
    }
  }
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%", opacity: 1 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "100%", opacity: 1 }}
        transition={{
          duration: 0.4, ease:"linear"
        }}
        drag="y" // 세로 방향 드래그 활성화
        dragConstraints={{ top: 0, bottom: 300 }} // 드래그 범위 제한
        onDragEnd={handleDragEnd} // 드래그 완료 시 처리
        style={{
          width: "100%",
          height: "400px",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#262827",
          color: "white",
          padding: "30px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          boxShadow: "5px 10px 15px 10px rgba(138, 250, 241, 0.5)",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontFamily: "Pretendard",
            fontWeight: "bold",
          }}
        >
          {selectedDate?.toString().split(" ")[2]}
        </div>
        <div
          style={{
            fontSize: "12x",
            fontFamily: "Pretendard",
            marginBottom: "15px",
          }}
        >
          {selectedDate?.toString().split(" ")[0]}
        </div>
        <ul>
          {events.map((el, index) => {
            if (el.startDate == selectedDate.toLocaleDateString("en-CA").split("T")[0]) {
              return (
                <div
                  style={{
                    height: "60px",
                    background: "rgba(44, 44, 44, 0.8)",
                    borderRadius: "15px",
                    display:"flex",
                    gap:"30px",
                    alignItems:"center",
                    padding:"10px",
                    marginBottom:"10px"
                  }}
                  key={index}
                >
                  <div className="category" style={{background:"silver"}}>이미지</div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "12px",
                        fontFamily: "Pretendard",
                        color: "#7D7D7D",
                        fontWeight: "bold",
                      }}
                    >
                      {el.startDate}
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontFamily: "Pretendard",
                        fontWeight: "700",
                        marginTop:"5px"
                      }}
                    >
                      {el.title}
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </ul>
      </motion.div>
    </AnimatePresence>
  )
}

export default EventDetails
