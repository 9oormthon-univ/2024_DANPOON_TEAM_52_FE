import { useNavigate, useParams } from "react-router-dom"
import {
  Container,
  HorizontalContainer,
  QuestsContainer,
  Qeust,
  StyledText,
  ScrollContainer,
} from "./styled"
import BaseLayout from "../../../components/BaseLayout"
import BackwardButton from "../../../components/BackwardButton"
import ConstellationCard from "../../../components/ConstellationCard"
import ShadowContainer from "../../../components/ShadowContainer"
import { ReactComponent as CheckSVG } from "../../../svgs/Check.svg"
import { ROUTES_PATH_HOME } from "../../../constants/routes"
import { myGoalsAtom } from "../../../store/atoms/goal"
import { useRecoilState } from "recoil"
import { useEffect, useState } from "react"
import { reqGetGoal } from "../../../apis/goal"
import { DEFAULT_GOAL } from "../../../constants/goal"

export default function GoalConstellation() {
  const { id } = useParams()
  const navigate = useNavigate()
  const goCompleteGoal = () => navigate(`${ROUTES_PATH_HOME}?tab=complete`)
  const [goals, setGoals] = useRecoilState(myGoalsAtom)
  const [goal, setGoal] = useState(DEFAULT_GOAL)

  const getGoal = async () => {
    const existGoal = goals.find((g) => g.id === +id)
    if (existGoal) {
      setGoal(existGoal)
      return
    }
    const res = await reqGetGoal(id)
    if (res.status === 200) {
      setGoals((prev) => [...prev, res.data])
      setGoal(res.data)
    } else alert("목표를 불러오는데 실패했습니다.")
  }
  useEffect(() => {
    getGoal()
  }, [])
  return (
    <BaseLayout>
      <Container>
        <HorizontalContainer>
          <BackwardButton onClick={goCompleteGoal} />
          <ConstellationCard goal={goal} />
        </HorizontalContainer>
        <StyledText>목표를 위해 달성한 퀘스트 목록이에요</StyledText>
        <ShadowContainer>
          <ScrollContainer>
            <QuestsContainer>
              {goal.quests.map((quest) => (
                <Qeust key={quest.id}>
                  <CheckSVG />
                  {quest.title}
                </Qeust>
              ))}
            </QuestsContainer>
          </ScrollContainer>
        </ShadowContainer>
      </Container>
    </BaseLayout>
  )
}
