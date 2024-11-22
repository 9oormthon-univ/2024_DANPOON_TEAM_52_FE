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

export default function Quest() {
  const goals = {
    id: 1,
    title: "희망 기업 인턴 합격하기",
    icon: "🚀",
    category: "경험·활동·교육",
    quests: [
      {
        id: 1,
        title: "희망 기업 인턴 공고 확인하기",
        isDone: true,
      },
      {
        id: 2,
        title: "이력서 작성하기",
        isDone: true,
      },
      {
        id: 3,
        title: "자기소개서 작성하기",
        isDone: false,
      },
      {
        id: 4,
        title: "면접 준비하기",
        isDone: false,
      },
      {
        id: 5,
        title: "인턴 면접 보기",
        isDone: false,
      },
      {
        id: 6,
        title: "인턴 합격하기",
        isDone: false,
      },
      {
        id: 7,
        title: "인턴 시작하기",
        isDone: false,
      },
      {
        id: 8,
        title: "인턴 끝내기",
        isDone: false,
      },
      {
        id: 9,
        title: "인턴 후기 작성하기",
        isDone: false,
      },
      {
        id: 10,
        title: "인턴 후기 제출하기",
        isDone: false,
      },
    ],
  }
  return (
    <Container>
      <Header>
        <BackwardButton />
        <HeaderFlex>
          <Flex gap={10} align="end">
            <Icon>{goals.icon}</Icon>
            <Label>{goals.category}</Label>
          </Flex>
          <Title>{goals.title}</Title>
        </HeaderFlex>
      </Header>
      <CompleteButton $variant="secondary">목표 완료</CompleteButton>
      <Description>
        해당 목표를 위한 <Highlight>퀘스트</Highlight>
      </Description>
      <QuestContainer>
        <CheckQuests quests={goals.quests} />
      </QuestContainer>
      <Button $variant="primary">
        <PlusSVG stroke="#000" /> 퀘스트 추가하기
      </Button>
    </Container>
  )
}
