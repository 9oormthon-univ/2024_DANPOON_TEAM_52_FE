import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Drawer from "../Drawer"
const MotionContainer = styled(motion.div)`
  width: 100%;
  height: 350px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  opacity: 80%;
  color: white;
  padding: 30px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 5px 10px 15px 10px rgba(138, 250, 241, 0.5);
  @media (min-width: 520px){
    width: 520px;
  }
`;

const DateText = styled.div`
  font-size: 24px;
  font-family: "Pretendard", sans-serif;
  font-weight: bold;
`;

const DayText = styled.div`
  font-size: 12px;
  font-family: "Pretendard", sans-serif;
  margin-bottom: 15px;
`;

const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const EventItem = styled.li`
  height: 60px;
  background: rgba(44, 44, 44, 0.8);
  border-radius: 15px;
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;

const EventCategory = styled.div`
  background: silver;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const EventDetailsText = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventDate = styled.div`
  font-size: 12px;
  font-family: "Pretendard", sans-serif;
  color: #7d7d7d;
  font-weight: bold;
`;

const EventTitle = styled.div`
  font-size: 15px;
  font-family: "Pretendard", sans-serif;
  font-weight: 700;
  margin-top: 5px;
`;

const EventDetails = ({ selectedDate, events, setShowDetails, getDatesInRange }) => {
  const handleDragEnd = (_, info) => {
    if (info.offset.y > 100) {
      setShowDetails(false);
    }
  };

  return (
    <AnimatePresence> 
      <MotionContainer
        initial={{ y: "100%", opacity: 1 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "100%", opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: "linear",
        }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 300 }}
        onDragEnd={handleDragEnd}
      >
        <DateText>{selectedDate?.toString().split(" ")[2]}</DateText>
        <DayText>{selectedDate?.toString().split(" ")[0]}</DayText>
        <EventList>
          {events.map((el, index) => {
            const eventDates = getDatesInRange(el.startDate, el.endDate);
            if (eventDates.includes(selectedDate.toLocaleDateString("en-CA"))) {
              return (
                <EventItem key={index}>
                  <EventCategory />
                  <EventDetailsText>
                    <EventDate>
                      {el.startDate === el.endDate
                        ? `${el.startDate}`
                        : `${el.startDate} ~ ${el.endDate}`}
                    </EventDate>
                    <EventTitle>{el.title}</EventTitle>
                  </EventDetailsText>
                </EventItem>
              );
            }
            return null;
          })}
        </EventList>
      </MotionContainer>
    </AnimatePresence>
  );
};

export default EventDetails;