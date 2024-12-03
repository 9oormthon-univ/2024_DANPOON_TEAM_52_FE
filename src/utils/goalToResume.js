
const convertCategory = (category) => {
  switch (category) {
    case "CERTIFICATION":
      return "CAREER"
    case "EXPERIENCE":
      return "QUALIFICATION"
    case "CAREER":
      return "EXPERIENCE"
    case "ETC":
      return "ETC"
    default:
      return ""
  }
}

export default function goalToResume(goal) {
  return ({
    goalId: goal.id,
    resume_category: convertCategory(goal.category),
    title: goal.title,
    content: "",
    start_date: goal.startDate,
    end_date: goal.completedDate,
  })
}
