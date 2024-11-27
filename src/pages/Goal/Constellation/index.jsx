import { useNavigate } from "react-router-dom"
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

export default function GoalConstellation() {
  const navigate = useNavigate()
  const goCompleteGoal = () => navigate(`${ROUTES_PATH_HOME}?tab=complete`)
  const goal = {
    id: 99,
    icon: "🏫",
    label: "별자리 이름",
    title: "Spring Security 인강 듣기",
    description: "2024년 11월 10일 - 2024년 12월 31일",
    quests: [
      {
        id: 1,
        title: "SecurityFilterChain 공부하기",
      },
      {
        id: 2,
        title: "Authentication 이해하기",
      },
      {
        id: 3,
        title: "Authentication Provider 공부하기",
      },
      {
        id: 4,
        title: "Authentication Manager 공부하기",
      },
      {
        id: 5,
        title: "SecurityContextHolder 이해하기",
      },
      {
        id: 6,
        title: "jwt 구현해보기",
      },
    ],
  }
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
