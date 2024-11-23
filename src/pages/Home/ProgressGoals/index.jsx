import {
  Container,
  ModalContent,
  Title,
  ButtonContainer,
  StyledButton,
  Select,
} from "./styled"
import { ReactComponent as PlusSVG } from "../../../svgs/plus.svg"
import Goals from "../../../components/Goals"
import { Flex } from "antd"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES_PATH_RECOMMENDED_GOALS } from "../../../constants/routes"
import Modal from "../../../components/Modal"
import TextInput from "../../../components/TextInput"
import Button from "../../../components/Button"
import { CATEGORIES } from "../../../constants/dummy"
import { useRecoilState } from "recoil"
import goalAtom from "../../../store/atoms/goal"

export default function ProgressGoals() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [goals, setGoals] = useRecoilState(goalAtom)
  const [selectedGoal, setSelectedGoal] = useState({
    id: 0,
    icon: "🏆",
    category: "자격·어학·수상",
    title: "",
    quests: [],
  })

  const getGoals = async () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 100)
  }
  const addGoal = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      id: goals.length + 1,
      // icon: CATEGORIES.find((v) => v.icon === formData.get("category")).icon,
      category: formData.get("category"),
      title: formData.get("title"),
      quests: [],
    }
    setGoals((prev) => [...prev, data])
    setOpen(false)
  }
  const onEdit = (goal) => {
    console.log(goal)
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
        onEdit={onEdit}
      />
      <Flex vertical gap={14}>
        <Button $variant="secondary" onClick={() => setOpen(true)}>
          <PlusSVG stroke="#fff" /> 목표 추가하기
        </Button>
        <Button
          $variant="primary"
          onClick={() => navigate(ROUTES_PATH_RECOMMENDED_GOALS)}
        >
          목표 추천 받기
        </Button>
      </Flex>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalContent onSubmit={addGoal}>
          <Title>목표 추가하기</Title>
          <Select
            value={selectedGoal.category}
            onChange={(v) =>
              setSelectedGoal((v) => ({ ...v, category: v.value }))
            }
            options={CATEGORIES.map((v) => ({
              value: v.value,
              label: `${v.icon} ${v.label}`,
            }))}
          />
          <TextInput
            name="title"
            value={selectedGoal.title}
            onChange={(v) =>
              setSelectedGoal((prev) => ({ ...prev, title: v.value }))
            }
          />
          <ButtonContainer>
            <StyledButton $variant="secondary" onClick={() => setOpen(false)}>
              취소
            </StyledButton>
            <StyledButton $variant="primary" htmlType="submit">
              추가
            </StyledButton>
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </Container>
  )
}
