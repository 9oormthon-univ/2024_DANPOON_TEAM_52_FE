import { Container } from "./styled"
import { ReactComponent as PlusSVG } from "../../../svgs/plus.svg"
import { ReactComponent as AiSVG } from "../../../svgs/Ai.svg"
import Goals from "../../../components/Goals"
import { Flex } from "antd"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  ROUTES_PATH_RECOMMENDED_GOALS,
  ROUTES_PATH_GOAL,
} from "../../../constants/routes"
import { DEFAULT_GOAL } from "../../../constants/goal"
import Button from "../../../components/Button"
import { useRecoilState } from "recoil"
import { myGoalsAtom } from "../../../store/atoms/goal"
import { reqGetGoals, reqDeleteGoal, reqPatchGoals } from "../../../apis/goal"
import GoalModal from "../../../components/Modals/GoalModal"

export default function ProgressGoals() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [goals, setGoals] = useRecoilState(myGoalsAtom)
  const [selectedGoal, setSelectedGoal] = useState(DEFAULT_GOAL)
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => {
    setOpen(false)
    setSelectedGoal(DEFAULT_GOAL)
  }
  const onGoalClick = (goal) => {
    navigate(`${ROUTES_PATH_GOAL}/${goal.id}`)
  }
  const onGoalEdit = (goal) => {
    setSelectedGoal(goal)
    openModal()
  }
  const onGoalDelete = async (goal) => {
    const res = await reqDeleteGoal(goal.id)
    if (res.status === 200) {
      alert("목표가 삭제되었습니다.")
      setGoals((prev) => prev.filter((v) => v.id !== goal.id))
    } else alert("목표 삭제에 실패했습니다.")
    setGoals((prev) => prev.filter((v) => v.id !== goal.id))
  }
  const goRecommendedGoals = () => {
    navigate(ROUTES_PATH_RECOMMENDED_GOALS)
  }
  const getGoals = async () => {
    setLoading(true)
    const res = await reqGetGoals({ is_complete: false })
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
  const onChangeSequence = async (sortedGoals) => {
    const data = sortedGoals.map((v, idx) => ({ ...v, sequence: idx }))
    const res = await reqPatchGoals(data)
    if (res.status === 200) {
      setGoals(data)
    }
  }
  useEffect(() => {
    getGoals()
  }, [])
  return (
    <Container>
      <Goals
        goals={goals.filter((v) => !v.isComplete)}
        loading={loading}
        option={{ deleteVisible: true, editVisible: true, draggable: true }}
        onClick={onGoalClick}
        onEdit={onGoalEdit}
        onDelete={onGoalDelete}
        onChangeSequence={onChangeSequence}
      />
      <Flex vertical gap={14}>
        <Button $variant="secondary" onClick={openModal}>
          <PlusSVG stroke="#fff" /> 목표 추가하기
        </Button>
        <Button $variant="primary" onClick={goRecommendedGoals}>
          <AiSVG />
          목표 추천 받기
        </Button>
      </Flex>
      <GoalModal open={open} onClose={closeModal} goal={selectedGoal} />
    </Container>
  )
}
