import { useState, useEffect } from "react"
import styled from "styled-components"
import { DEFAULT_GOAL } from "../../constants/goal"
import { myGoalsAtom } from "../../store/atoms/goal"
import { useRecoilState } from "recoil"
import { CATEGORIES } from "../../constants/dummy"
import SelectComponent from "../Select"
import ButtonComponent from "../Button"
import Modal from "../Modal"
import TextInput from "../TextInput"
import { reqPatchGoal, reqPostGoal } from "../../apis/goal"

const ModalContent = styled.form`
  display: flex;
  width: 270px;
  flex-direction: column;
  padding: 10px 0px 0px;
  gap: 10px;
`

const Select = styled(SelectComponent)`
  width: 100%;
`

const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 10px;
`

const StyledButton = styled(ButtonComponent)`
  flex: 1;
  &&& {
    padding: 5px;
  }
`

export default function GoalModal({ open, onClose, goal, onSave }) {
  const [goals, setGoals] = useRecoilState(myGoalsAtom)
  const [selectedGoal, setSelectedGoal] = useState(goal || DEFAULT_GOAL)

  const closeModal = () => {
    onClose()
    setSelectedGoal(DEFAULT_GOAL)
  }
  const onGoalSave = async () => {
    const goalIdx = goals.findIndex((v) => v.id === selectedGoal.id)
    const isEdit = goalIdx !== -1
    let res
    if (isEdit) res = await reqPatchGoal(selectedGoal.id, selectedGoal)
    else res = await reqPostGoal(selectedGoal)
    if (res.status === 200) {
      setGoals((prev) => {
        if (isEdit) return prev.map((v, i) => (i === goalIdx ? res.data : v))
        return [...prev, res.data]
      })
    } else {
      alert("목표 저장에 실패했습니다.")
    }
    closeModal()
    onSave?.()
  }
  useEffect(() => {
    setSelectedGoal(goal || DEFAULT_GOAL)
  }, [goal])
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>
        <Title>목표 {selectedGoal.id === -1 ? "추가" : "수정"}하기</Title>
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
  )
}
