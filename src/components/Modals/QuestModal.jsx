import { useState, useEffect } from "react"
import styled from "styled-components"
import { DEFAULT_QUEST } from "../../constants/goal"
import { myGoalsAtom } from "../../store/atoms/goal"
import { useSetRecoilState } from "recoil"
import SelectComponent from "../Select"
import ButtonComponent from "../Button"
import Modal from "../Modal"
import TextInput from "../TextInput"
import { reqPatchQuest, reqPostQuest } from "../../apis/quest"

export const ModalContent = styled.form`
  display: flex;
  width: 270px;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`

export const Select = styled(SelectComponent)`
  width: 100%;
`

export const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 10px;
`

export const StyledButton = styled(ButtonComponent)`
  flex: 1;
  &&& {
    padding: 5px;
  }
`

export default function QuestModal({ open, onClose, goalId, quest, onSave }) {
  const setGoals = useSetRecoilState(myGoalsAtom)
  const [selectedQuest, setSelectedQuest] = useState(quest || DEFAULT_QUEST)

  const closeModal = () => {
    onClose()
    setSelectedQuest(DEFAULT_QUEST)
  }
  const onQuestSave = async () => {
    console.log(selectedQuest)
    const isEdit = quest.id !== -1
    const apiFunc = isEdit ? reqPatchQuest : reqPostQuest
    let res
    if (isEdit) res = await apiFunc(selectedQuest.id, selectedQuest)
    else res = await apiFunc(selectedQuest)
    if (res.status === 201 || res.status === 200) {
      setGoals((prev) => {
        if (isEdit)
          return [
            ...prev.map((g) =>
              g.id === goalId
                ? {
                    ...g,
                    quests: g.quests.map((q) =>
                      q.id === selectedQuest.id ? { ...q, selectedQuest } : q
                    ),
                  }
                : g
            ),
          ]
        else
          return [
            ...prev.map((g) =>
              g.id === goalId
                ? { ...g, quests: [...g.quests, selectedQuest] }
                : g
            ),
          ]
      })
    } else {
      alert("목표 저장에 실패했습니다.")
    }
    closeModal()
    onSave?.()
  }
  useEffect(() => {
    setSelectedQuest(quest || DEFAULT_QUEST)
  }, [quest])
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>
        <Title>퀘스트 {selectedQuest.id === -1 ? "추가" : "수정"}하기</Title>
        <TextInput
          value={selectedQuest.title}
          onChange={(e) =>
            setSelectedQuest((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <ButtonContainer>
          <StyledButton $variant="secondary" onClick={closeModal}>
            취소
          </StyledButton>
          <StyledButton $variant="primary" onClick={onQuestSave}>
            {selectedQuest.id === -1 ? "추가" : "수정"}
          </StyledButton>
        </ButtonContainer>
      </ModalContent>
    </Modal>
  )
}
