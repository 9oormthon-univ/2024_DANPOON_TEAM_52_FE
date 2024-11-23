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

export default function GoalConstellation() {
  const goal = {
    icon: "🌟",
    label: "별자리 이름",
    title: "데이터 기반 능력 강화하기",
    description: "2024년 10월 11일 - 2024년 11월 23일",
    quests: [
      {
        id: 1,
        title: "SQL 기본 및 고급 쿼리 작성 연습",
      },
      {
        id: 2,
        title: "Kaggle 등 플랫폼에서 데이터 분석 대회 참여",
      },
      {
        id: 3,
        title: "Kaggle 등 플랫폼에서 데이터 분석 대회 참여",
      },
      {
        id: 4,
        title: "Kaggle 등 플랫폼에서 데이터 분석 대회 참여",
      },
      {
        id: 4,
        title: "Kaggle 등 플랫폼에서 데이터 분석 대회 참여",
      },
      {
        id: 4,
        title: "Kaggle 등 플랫폼에서 데이터 분석 대회 참여",
      },
      {
        id: 4,
        title: "Kaggle 등 플랫폼에서 데이터 분석 대회 참여",
      },
      {
        id: 4,
        title: "Kaggle 등 플랫폼에서 데이터 분석 대회 참여",
      },
      {
        id: 4,
        title: "Kaggle 등 플랫폼에서 데이터 분석 대회 참여",
      },
    ],
  }
  return (
    <BaseLayout>
      <Container>
        <HorizontalContainer>
          <BackwardButton />
          <ConstellationCard goal={goal} />
        </HorizontalContainer>
        <StyledText>목표를 위해 달성한 퀘스트 목록이에요</StyledText>
        <ShadowContainer>
          <ScrollContainer>
            <QuestsContainer>
              {goal.quests.map((quest) => (
                <Qeust key={quest.id}>{quest.title}</Qeust>
              ))}
            </QuestsContainer>
          </ScrollContainer>
        </ShadowContainer>
      </Container>
    </BaseLayout>
  )
}
