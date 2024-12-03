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
import { Flex } from "antd"
import Switch from "../../components/Switch"
import DatePicker from "../../components/DatePicker"
import { motion, AnimatePresence } from "framer-motion"
import dayjs from "dayjs"

const ModalContent = styled.form`
  display: flex;
  width: 270px;
  flex-direction: column;
  padding: 20px;
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

const Label = styled.label`
  color: #fff;
  font-size: 15px;
  font-weight: 500;
`

const HiddenContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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

export default function QuestModal({ open, onClose, goalId, quest, onSave }) {
  const setGoals = useSetRecoilState(myGoalsAtom)
  const [selectedQuest, setSelectedQuest] = useState(quest || DEFAULT_QUEST)
  const [visibleDateSetting, setVisibleDateSetting] = useState(false)

  const closeModal = () => {
    onClose()
    setVisibleDateSetting(false)
    setSelectedQuest(DEFAULT_QUEST)
  }
  const onQuestSave = async () => {
    const isEdit = quest.id !== -1
    const apiFunc = isEdit ? reqPatchQuest : reqPostQuest
    let res
    if (isEdit) res = await apiFunc(selectedQuest.id, selectedQuest)
    else res = await apiFunc({ ...selectedQuest, goalId })
    if (res.status === 200) {
      setGoals((prev) => {
        return [
          ...prev.map((g) =>
            g.id === goalId
              ? {
                  ...g,
                  quests: isEdit
                    ? g.quests.map((q) =>
                        q.id === selectedQuest.id ? { ...q, selectedQuest } : q
                      )
                    : [...g.quests, res.data],
                }
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
    setVisibleDateSetting(quest?.deadline !== undefined)
  }, [quest])
  return (
    <Modal open={open} onClose={closeModal}>
      <ModalContent>
        <Title>퀘스트 {selectedQuest.id === -1 ? "추가" : "수정"}하기</Title>
        <TextInput
          value={selectedQuest.title}
          onChange={(e) =>
            setSelectedQuest((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <Flex justify="space-between" align="center">
          <Label>기한 설정</Label>
          <Switch
            checked={visibleDateSetting}
            onChange={(checked) => setVisibleDateSetting(checked)}
          />
        </Flex>
        <AnimatePresence>
          {visibleDateSetting && (
            <HiddenContainer
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
            >
              <DatePicker
                value={selectedQuest.deadline && dayjs(selectedQuest.deadline)}
                onChange={(date) => {
                  const dateStr = date.format("YYYY-MM-DD")
                  setSelectedQuest((prev) => ({ ...prev, deadline: dateStr }))
                }}
                placeholder="날짜를 선택하세요"
              />
            </HiddenContainer>
          )}
        </AnimatePresence>
        <ButtonContainer>
          <StyledButton $variant="secondary" onClick={closeModal}>
            취소
          </StyledButton>
          <StyledButton onClick={onQuestSave}>
            {selectedQuest.id === -1 ? "추가" : "수정"}
          </StyledButton>
        </ButtonContainer>
      </ModalContent>
    </Modal>
  )
}
