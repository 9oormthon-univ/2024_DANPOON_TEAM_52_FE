import {
  CompleteButton,
  Container,
  Description,
  Header,
  HeaderFlex,
  Icon,
  Label,
  QuestContainer,
  Title,
  Highlight,
} from "./styled"
import BackwardButton from "../../components/BackwardButton"
import { Flex } from "antd"
import Button from "../../components/Button"
import { ReactComponent as PlusSVG } from "../../svgs/plus.svg"
import CheckQuests from "../../components/CheckQuests"
import { useRecoilState } from "recoil"
import { myGoalsAtom } from "../../store/atoms/goal"
import { useState } from "react"
import { useParams } from "react-router-dom"

export default function Quest() {
  const { id } = useParams()
  const [goals, setGoals] = useRecoilState(myGoalsAtom)
  const [quests, setQuests] = useState([])
  console.log(id)
  const [goal, setGoal] = useState(goals[id - 1])
  return (
    <Container>
      <Header>
        <BackwardButton />
        <HeaderFlex>
          <Flex gap={10} align="end">
            <Icon>{goal.icon}</Icon>
            <Label>{goal.category}</Label>
          </Flex>
          <Title>{goal.title}</Title>
        </HeaderFlex>
      </Header>
      <CompleteButton $variant="secondary">목표 완료</CompleteButton>
      <Description>
        해당 목표를 위한 <Highlight>퀘스트</Highlight>
      </Description>
      <QuestContainer>
        <CheckQuests quests={goal.quests} />
      </QuestContainer>
      <Button $variant="primary">
        <PlusSVG stroke="#000" /> 퀘스트 추가하기
      </Button>
    </Container>
  )
}
