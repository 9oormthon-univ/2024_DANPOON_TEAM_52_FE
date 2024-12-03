import styled from "styled-components"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { reqPostResumeByGoal } from "../../../apis/user"
import { DEFAULT_RESUME, CATEGORIES } from "../../../constants/resume"
import TextInput from "../../../components/TextInput"
import Modal from "../../../components/Modal"
import SelectComponent from "../../../components/Select"
import ButtonComponent from "../../../components/Button"
import goalToResume from "../../../utils/goalToResume"
import DatePicker from "../../../components/DatePicker"
import Switch from "../../../components/Switch"
import dayjs from "dayjs"
import { Flex } from "antd"
import { ROUTES_PATH_MYPAGE } from "../../../constants/routes"

const ModalContent = styled.form`
  display: flex;
  width: 360px;
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

const Label = styled.label`
  color: #fff;
  font-size: 15px;
  font-weight: 500;
`

export default function GoalToResumeModal({ open, onClose, goal }) {
  const navigate = useNavigate()
  const [selectedResume, setSelectedResume] = useState(DEFAULT_RESUME)
  const [isProgressing, setIsProgressing] = useState(false)

  const closeModal = () => {
    onClose()
  }
  const onResumeSave = async () => {
    const res = await reqPostResumeByGoal({
      ...selectedResume,
      end_date: isProgressing ? null : selectedResume.end_date,
    })
    if (res.status === 200) {
      navigate(`${ROUTES_PATH_MYPAGE}`)
    } else {
      alert("목표 저장에 실패했습니다.")
    }
    closeModal()
  }
  useEffect(() => {
    setSelectedResume(goalToResume(goal))
  }, [goal])
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>
        <Title>이력 추가하기</Title>
        <Select
          value={selectedResume.resume_category}
          onChange={(v) =>
            setSelectedResume((prev) => ({
              ...prev,
              resume_category: CATEGORIES.find(
                (category) => category.value === v
              ).value,
              icon: CATEGORIES.find((category) => category.value === v).icon,
            }))
          }
          options={CATEGORIES.map((v) => ({
            value: v.value,
            label: `${v.icon} ${v.label}`,
          }))}
        />
        <TextInput
          value={selectedResume.title}
          placeholder="활동명"
          onChange={(e) =>
            setSelectedResume((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <TextInput
          value={selectedResume.content}
          placeholder="세부 사항"
          onChange={(e) =>
            setSelectedResume((prev) => ({ ...prev, content: e.target.value }))
          }
        />

        <Flex justify="space-between" align="center">
          <Label>진행 중</Label>
          <Switch
            checked={isProgressing}
            onChange={(checked) => setIsProgressing(checked)}
          />
        </Flex>

        <Flex justify="space-between" align="center" gap={10}>
          <DatePicker
            value={
              selectedResume.start_date && dayjs(selectedResume.start_date)
            }
            onChange={(date) => {
              const dateStr = date.format("YYYY-MM-DD")
              setSelectedResume((prev) => ({ ...prev, start_date: dateStr }))
            }}
            placeholder="시작 날짜"
          />
          {!isProgressing && (
            <>
              <Label>~</Label>
              <DatePicker
                value={
                  selectedResume.end_date && dayjs(selectedResume.end_date)
                }
                onChange={(date) => {
                  const dateStr = date.format("YYYY-MM-DD")
                  setSelectedResume((prev) => ({ ...prev, end_date: dateStr }))
                }}
                placeholder="종료 날짜"
              />
            </>
          )}
        </Flex>
        <ButtonContainer>
          <StyledButton $variant="secondary" onClick={closeModal}>
            취소
          </StyledButton>
          <StyledButton $variant="primary" onClick={onResumeSave}>
            추가
          </StyledButton>
        </ButtonContainer>
      </ModalContent>
    </Modal>
  )
}
