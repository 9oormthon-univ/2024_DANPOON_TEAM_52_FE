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
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { reqGetRecommendGoals, reqPostGoal } from "../../apis/goal"
import { ROUTES_PATH_HOME } from "../../constants/routes"
import { useSetRecoilState } from "recoil"
import { myGoalsAtom } from "../../store/atoms/goal"

export default function RecommendedGoals() {
  const name = "아자아자석영"
  const navigate = useNavigate()
  const setGoals = useSetRecoilState(myGoalsAtom)
  const [recommendedGoals, setRecommendedGoals] = useState([])
  const [index, setIndex] = useState(0)

  const addGoal = async () => {
    const res = await reqPostGoal(recommendedGoals[index])
    if (res.status === 201) {
      alert("목표가 추가되었습니다.")
      setGoals((prev) => [...prev, res.data])
      navigate(ROUTES_PATH_HOME)
    } else {
      alert("목표 추가에 실패했습니다.")
    }
  }
  const onChange = (index) => {
    setIndex(index)
  }
  const getRecommendedGoals = async () => {
    const res = await reqGetRecommendGoals()
    if (res.status === 200) setRecommendedGoals(res.data)
    else alert("추천 목표를 불러오는데 실패했습니다.")
  }
  useEffect(() => {
    getRecommendedGoals()
  }, [])
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
        <Carousel dots={true} afterChange={onChange}>
          {recommendedGoals.map((goal, index) => (
            <GoalCard key={index} goal={goal} />
          ))}
        </Carousel>
      </RecommendedGoalsContainer>
      <Flex vertical gap={14}>
        <Button $variant="secondary" onClick={getRecommendedGoals}>
          <SwapSVG />
          목표 새로고침하기
        </Button>
        <Button $variant="primary" onClick={addGoal}>
          <PlusSVG stroke="#000" />
          나의 목표에 추가하기
        </Button>
      </Flex>
    </Container>
  )
}
