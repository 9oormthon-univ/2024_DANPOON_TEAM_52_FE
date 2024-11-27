import { useState } from "react";
import { reqGetFeedback } from "../apis/feedback";
import { resumeData } from "../constants/data";
import resumeAtom from "../store/atoms/resume";
import { useRecoilValue } from "recoil";
export const useGroupedData = () => {
  const categoryMapping = {
    academy_list: { name: "학력", icon: "/categories/category1.png" },
    career_list: { name: "경력", icon: "/categories/category2.png" },
    qualification_list: { name: "자격·어학·수상", icon: "/categories/category3.png" },
    experience_list: { name: "경험·활동·교육", icon: "/categories/category4.png" },
    etc_list: { name: "기타", icon: "/categories/category5.png" },
  };

  //실제 데이터
  const realResumeData = useRecoilValue(resumeAtom);
  const groupedData = Object.keys(realResumeData).map((key) => ({
    //카테고리  
    id: key,
    name: categoryMapping[key]?.name || "UNKNOWN",
    icon: categoryMapping[key]?.icon || "/default_icon.png",
    items: realResumeData[key].map((item) => ({
      resume_id: item.resume_id,
      start_date: item.start_date,
      end_date: item.end_date,
      itemName: item.title,
      detail: item.content,
    })),
  }));
  return groupedData;
};

export const useFeedback = () => {
  const [feedbackData, setFeedbackData] = useState("");
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const createFeedback = async () => {
    const res = await reqGetFeedback();
    if (res) {
      setFeedbackData(res.data.message);
      setIsFeedbackModalOpen(true);
    }
  };

  return { feedbackData, isFeedbackModalOpen, setIsFeedbackModalOpen, createFeedback };
};