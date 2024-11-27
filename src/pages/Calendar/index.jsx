import React, { useEffect, useState } from "react";
import CalendarComponent from "../../components/Calendar/CalendarComponent";
import ModalComponent from "../../components/Calendar/ModalComponent";
import EventDetails from "../../components/Calendar/EventDetails";
import { StyledCalendarWrapper } from "./styled";
import BaseLayout from "../../components/BaseLayout";
// 분리된 훅들 가져오기
import { useDateRange } from "../../hooks/useDateRange";
import { useEvents } from "../../hooks/useEvents";
import { useModal } from "../../hooks/useModal";

const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    startDate: null,
    endDate: null,
  });
  const { date, setDate, startDate, setStartDate, endDate, setEndDate, getDatesInRange } =
    useDateRange();
  const { events, setEvents, renderDotsForDate, questData } = useEvents();

  // 모달 및 UI 관리
  const { showDetails, setShowDetails, selectedDate, setSelectedDate, selectDate } =
    useModal();

  const handleSaveEvent = (newEvent, option) => {
    const eventDate = new Date(newEvent);
    const formattedDate = eventDate.toLocaleDateString("en-CA");

    if (option === "single") {
      setStartDate(formattedDate);
      setEndDate(formattedDate);
    } else if (option === "start") {
      setStartDate(formattedDate);
    } else if (option === "end") {
      setEndDate(formattedDate);
    }
  };

  const onClickAddBtn = (addData, ModalOpen) => {
    setEvents((prev) => [...prev, addData]);
    ModalOpen(false);
  };

  return (
    <BaseLayout>
      <StyledCalendarWrapper>
        <CalendarComponent
          date={date}
          onDateChange={setDate}
          onActiveStartDateChange={(newDate) => setDate(new Date(newDate))} // 항상 Date 객체로 변환
          renderDotsForDate={(tileDate) => renderDotsForDate(tileDate, questData)}
          setIsModalOpen={setIsModalOpen}
          selectDate={selectDate}
          events={events}
        />
        <ModalComponent
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          newEvent={newEvent}
          onTitleChange={(title) => setNewEvent({ ...newEvent, title })}
          handleSaveEvent={handleSaveEvent}
          setIsModalOpen={setIsModalOpen}
          events={events}
          onClickAddBtn={onClickAddBtn}
          startDate={startDate}
          endDate={endDate}
        />
        {showDetails && (
          <EventDetails
            setShowDetails={setShowDetails}
            selectedDate={selectedDate}
            events={events}
            setEvents={setEvents}
            questData={questData}
            getDatesInRange={getDatesInRange}
          />
        )}
      </StyledCalendarWrapper>
    </BaseLayout>
  );
};

export default CalendarPage;