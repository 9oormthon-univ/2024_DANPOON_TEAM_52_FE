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
import { DEFAULT_GOAL } from "../../constants/goal"
import GoalModal from "../../components/Modals/GoalModal"

export default function RecommendedGoals() {
  const name = localStorage.getItem("nickname")
  const navigate = useNavigate()
  const [recommendedGoals, setRecommendedGoals] = useState([])
  const [selectedGoal, setSelectedGoal] = useState(DEFAULT_GOAL)
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const onSave = () => {
    navigate(ROUTES_PATH_HOME)
  }
  const onChange = (index) => {
    setIndex(index)
    setSelectedGoal(recommendedGoals[index])
  }
  const getRecommendedGoals = async () => {
    const res = await reqGetRecommendGoals()
    if (res.status === 200) {
      setRecommendedGoals(res.data.map((goal) => ({ ...goal, id: -1 })))
      setSelectedGoal({ ...res.data[index], id: -1 })
    } else alert("추천 목표를 불러오는데 실패했습니다.")
  }
  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
    setSelectedGoal(DEFAULT_GOAL)
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
        <Button $variant="primary" onClick={openModal}>
          <PlusSVG stroke="#000" />
          나의 목표에 추가하기
        </Button>
      </Flex>
      <GoalModal
        open={open}
        onClose={closeModal}
        goal={selectedGoal}
        onSave={onSave}
      />
    </Container>
  )
}
