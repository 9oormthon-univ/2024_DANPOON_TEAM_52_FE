import { useNavigate } from "react-router-dom"
import Constellation from "../../../components/Constellation"
import StarBackground from "../../../components/StarBackground"
import {
  ShadowContainer,
  Container,
  MonthContainer,
  Month,
  GoalContainer,
  GoalTitle,
  ConsterllationContainer,
} from "./styled"
import { ROUTES_PATH_GOAL_CONSTELLATION } from "../../../constants/routes"
import { useEffect, useState } from "react"
import { reqGetGoals } from "../../../apis/goal"
import { useRecoilState } from "recoil"
import { myGoalsAtom } from "../../../store/atoms/goal"
import { CATEGORIES } from "../../../constants/dummy"

export default function CompleteGoals() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [goals, setGoals] = useRecoilState(myGoalsAtom)
  const data = goals.reduce((acc, goal) => {
    if (!goal.isComplete) return acc
    const dateSplit = goal.completedDate.split("-")
    const month = `${dateSplit[0]}년 ${dateSplit[1]}월`
    if (!acc[month]) acc[month] = []
    acc[month].push(goal)
    return acc
  }, {})

  const onClickConstellation = (id) => {
    navigate(`${ROUTES_PATH_GOAL_CONSTELLATION}/${id}`)
  }

  const getGoals = async () => {
    setLoading(true)
    const res = await reqGetGoals({ is_complete: true })
    if (res.status === 200)
      setGoals((prev) => {
        const goals = [...res.data]
        if (prev.length === 0) return goals
        prev.forEach((goal) => {
          if (!goals.find((v) => v.id === goal.id)) goals.push(goal)
        })
        return goals
      })
    else alert("목표 불러오기에 실패했습니다.")
    setLoading(false)
  }
  useEffect(() => {
    getGoals()
  }, [])
  return (
    <ShadowContainer>
      <Container>
        {Object.keys(data).map((month) => (
          <MonthContainer key={month}>
            <Month>{month}</Month>
            {data[month].map((goal, index) => (
              <GoalContainer
                key={goal.id}
                direction={index % 2 ? "right" : "left"}
              >
                <ConsterllationContainer
                  onClick={() => onClickConstellation(goal.id)}
                >
                  <GoalTitle>
                    {CATEGORIES.find((c) => c.value === goal.category).icon}{" "}
                    {goal.title}
                  </GoalTitle>
                  <Constellation id={goal.id} starCount={goal.quests.length} />
                </ConsterllationContainer>
              </GoalContainer>
            ))}
          </MonthContainer>
        ))}
        <StarBackground />
      </Container>
    </ShadowContainer>
  )
}
