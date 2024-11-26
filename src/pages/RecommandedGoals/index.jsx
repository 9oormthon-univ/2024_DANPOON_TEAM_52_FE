import {
  Container,
  GradientBackground,
  RecommendedGoalsContainer,
  Title,
} from "./styled"
import BackwardButton from "../../components/BackwardButton"
import Typo from "../../components/Typo"
import Button from "../../components/Button"
import Carousel from "../../components/Carousel"
import { Flex } from "antd"
import { ReactComponent as SwapSVG } from "../../svgs/Swap.svg"
import { ReactComponent as PlusSVG } from "../../svgs/plus.svg"
import GoalCard from "../../components/GoalCard"
import { useState } from "react"
import { myGoalsAtom } from "../../store/atoms/goal"
import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"

export default function RecommandedGoals() {
  const name = "아자아자석영"
  const navigate = useNavigate()
  const [goal, setGoal] = useRecoilState(myGoalsAtom)
  const [data, setData] = useState([
    {
      icon: "🏫",
      category: "경험·활동·교육",
      title: "SpringMVC 인강 수강하기",
      description: [
        "직무 기초를 다질 수 있어요.",
        "해당 분야의 78% 사용자가 설정한 목표예요",
      ],
      quests: [],
    },
    {
      icon: "💬",
      category: "기타",
      title: "개발 블로그 운영하기",
      description: [
        "직무 기초를 다질 수 있어요.",
        "해당 분야의 83% 사용자가 설정한 목표예요",
      ],
      quests: [],
    },
  ])
  const nextData = [
    {
      icon: "🏆",
      category: "자격·어학·수상",
      title: "구름톤 본선 진출하기",
      description: [
        "직무 관련 경험을 얻을 수 있어요.",
        "해당 분야의 81% 사용자가 설정한 목표예요",
      ],
      quests: [],
    },
    {
      icon: "🪪",
      category: "경력",
      title: "인턴 경험해보기",
      description: [
        "직무 관련 경험을 얻을 수 있어요.",
        "해당 분야의 91% 사용자가 설정한 목표예요",
      ],
      quests: [],
    },
  ]
  return (
    <Container>
      <BackwardButton />
      <Title>
        <Typo.Highlight>{name}</Typo.Highlight>
        님께
        <br />
        추천하는 목표예요
      </Title>
      <RecommendedGoalsContainer>
        <GradientBackground />
        <Carousel dots={true}>
          {data.map((goal, index) => (
            <GoalCard key={index} goal={goal} />
          ))}
        </Carousel>
      </RecommendedGoalsContainer>
      <Flex vertical gap={14}>
        <Button $variant="secondary" onClick={() => setData(nextData)}>
          <SwapSVG />
          목표 새로고침하기
        </Button>
        <Button
          $variant="primary"
          onClick={() => {
            setGoal([...goal, data[0]])
            navigate("/home")
          }}
        >
          <PlusSVG stroke="#000" />
          나의 목표에 추가하기
        </Button>
      </Flex>
    </Container>
  )
}
