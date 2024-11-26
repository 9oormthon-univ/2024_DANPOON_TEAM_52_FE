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
import {
  reqGetGoals,
  reqPostGoal,
  reqPatchGoal,
  reqDeleteGoal,
} from "../../../apis/goal"

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
    const res = reqDeleteGoal(goal.id)
    if (res.status === 200) {
      alert("목표가 삭제되었습니다.")
      setGoals((prev) => prev.filter((v) => v.id !== goal.id))
    } else alert("목표 삭제에 실패했습니다.")
    setGoals((prev) => prev.filter((v) => v.id !== goal.id))
  }
  const onGoalSave = async () => {
    const goalIdx = goals.findIndex((v) => v.id === selectedGoal.id)
    const isEdit = goalIdx !== -1
    const apiFunc = isEdit ? reqPatchGoal : reqPostGoal
    const res = await apiFunc(selectedGoal)
    if (res.status === 201 || res.status === 200) {
      setGoals((prev) => {
        if (isEdit) return prev.map((v, i) => (i === goalIdx ? res.data : v))
        return [...prev, res.data]
      })
    } else {
      alert("목표 저장에 실패했습니다.")
    }
    closeModal()
  }
  const goRecommendedGoals = () => {
    navigate(ROUTES_PATH_RECOMMENDED_GOALS)
  }
  const getGoals = async () => {
    setLoading(true)
    const res = await reqGetGoals()
    if (res.status === 200) setGoals(res.data)
    else alert("목표 불러오기에 실패했습니다.")
    setLoading(false)
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
              {selectedGoal.id === -1 ? "추가" : "수정"}
            </StyledButton>
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </Container>
  )
}
