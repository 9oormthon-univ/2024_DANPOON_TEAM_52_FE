export const useGroupedData = (resumeData) => {
  const categoryMapping = {
    academy_list: { name: "학력", icon: "🏛️" },
    career_list: { name: "경력", icon: "🪪" },
    qualification_list: {
      name: "자격·어학·수상",
      icon: "🏆",
    },
    experience_list: {
      name: "경험·활동·교육",
      icon: "🏫",
    },
    etc_list: { name: "기타", icon: "💬" },
  }
  const groupedData = Object.keys(resumeData).map((key) => ({
    //카테고리
    id: key,
    name: categoryMapping[key]?.name || "UNKNOWN",
    icon: categoryMapping[key]?.icon || "/default_icon.png",
    items: resumeData[key].map((item) => ({
      resume_id: item.resume_id,
      start_date: item.start_date,
      end_date: item.end_date,
      itemName: item.title,
      detail: item.content,
    })),
  }))
  return groupedData
}
