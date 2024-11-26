import {
  Container,
  ModalContent,
  Title,
  ButtonContainer,
  StyledButton,
  Select,
} from "./styled"
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
import { CATEGORIES } from "../../../constants/dummy"
import { DEFAULT_GOAL } from "../../../constants/goal"
import Modal from "../../../components/Modal"
import TextInput from "../../../components/TextInput"
import Button from "../../../components/Button"
import { useRecoilState } from "recoil"
import { myGoalsAtom } from "../../../store/atoms/goal"
import { reqGetGoals } from "../../../apis/goal"

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
  const onGoalDelete = (goal) => {
    setGoals((prev) => prev.filter((v) => v.id !== goal.id))
  }
  const onGoalSave = () => {
    setGoals((prev) => {
      const idx = prev.findIndex((v) => v.id === selectedGoal.id)
      if (idx === -1) return [...prev, { ...selectedGoal, id: Date.now() }]
      return prev.map((v, i) => (i === idx ? selectedGoal : v))
    })
    closeModal()
  }
  const goRecommendedGoals = () => {
    navigate(ROUTES_PATH_RECOMMENDED_GOALS)
  }
  const getGoals = async () => {
    setLoading(true)
    try {
      const res = await reqGetGoals()
      setGoals(res.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getGoals()
  }, [])
  return (
    <Container>
      <Goals
        goals={goals}
        loading={loading}
        option={{ deleteVisible: true, editVisible: true }}
        onClick={onGoalClick}
        onEdit={onGoalEdit}
        onDelete={onGoalDelete}
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
      <Modal open={open} onClose={closeModal}>
        <ModalContent>
          <Title>목표 추가하기</Title>
          <Select
            value={selectedGoal.category}
            onChange={(v) =>
              setSelectedGoal((prev) => ({
                ...prev,
                category: CATEGORIES.find((category) => category.value === v)
                  .value,
                icon: CATEGORIES.find((category) => category.value === v).icon,
              }))
            }
            options={CATEGORIES.map((v) => ({
              value: v.value,
              label: `${v.icon} ${v.label}`,
            }))}
          />
          <TextInput
            value={selectedGoal.title}
            onChange={(e) =>
              setSelectedGoal((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <ButtonContainer>
            <StyledButton $variant="secondary" onClick={closeModal}>
              취소
            </StyledButton>
            <StyledButton $variant="primary" onClick={onGoalSave}>
              추가
            </StyledButton>
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </Container>
  )
}
