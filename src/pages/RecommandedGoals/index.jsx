import {
  CarouselContainer,
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

export default function RecommandedGoals() {
  const name = "아자아자석영"
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
          {new Array(3).fill(0).map((_, index) => (
            <GoalCard key={index} />
          ))}
        </Carousel>
      </RecommendedGoalsContainer>
      <Flex vertical gap={14}>
        <Button $variant="secondary">
          <SwapSVG />
          목표 새로고침하기
        </Button>
        <Button $variant="primary">
          <PlusSVG stroke="#000" />
          나의 목표에 추가하기
        </Button>
      </Flex>
    </Container>
  )
}
