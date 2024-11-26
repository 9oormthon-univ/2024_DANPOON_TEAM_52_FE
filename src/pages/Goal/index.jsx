import {
  CompleteButton,
  Container,
  Description,
  Header,
  HeaderFlex,
  Icon,
  Label,
  QuestContainer,
  Title,
  Highlight,
  RightText,
} from "./styled"
import BackwardButton from "../../components/BackwardButton"
import { Flex } from "antd"
import Button from "../../components/Button"
import { ReactComponent as PlusSVG } from "../../svgs/plus.svg"
import CheckQuests from "../../components/CheckQuests"
import { useRecoilState } from "recoil"
import { myGoalsAtom } from "../../store/atoms/goal"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { reqGetGoals } from "../../apis/goal"
import { DEFAULT_GOAL } from "../../constants/goal"
import { reqPatchQuest } from "../../apis/quest"
import { CheckModal } from "../../components/Modal"
import { reqPatchGoal } from "../../apis/goal"
import Confetti from "../../components/Confetti"
import Loading from "../../components/Loading"
import { ROUTES_PATH_GOAL_CONSTELLATION } from "../../constants/routes"

export default function Quest() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [goals, setGoals] = useRecoilState(myGoalsAtom)
  const [goal, setGoal] = useState(DEFAULT_GOAL)
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false)
  const [checkModal, setCheckModal] = useState({})
  const CONFIRM_COMPLETE_MODAL = {
    title: "진행중인 목표를\n완료하시겠어요?",
    cancleText: "취소",
    confirmText: "완료",
    onCancle: () => setIsCheckModalOpen(false),
    onConfirm: async () => {
      const res = await reqPatchGoal(goal.id, { is_complete: true })
      if (res.status === 200) {
        setGoals((prev) =>
          prev.map((g) => (g.id === goal.id ? { ...g, isComplete: true } : g))
        )
        setCheckModal({
          title: "새로운 별자리가\n완성되었어요!",
          cancleText: "",
          confirmText: "확인",
          onConfirm: () => {
            setIsCheckModalOpen(false)
            navigate(`${ROUTES_PATH_GOAL_CONSTELLATION}/${goal.id}`)
          },
          onCancle: () => {
            setIsCheckModalOpen(false)
            navigate(`${ROUTES_PATH_GOAL_CONSTELLATION}/${goal.id}`)
          },
          backgroundChildren: <Confetti />,
        })
      }
    },
    backgroundChildren: null,
  }
  const onChangeQuestComplete = async (questId, isComplete) => {
    const res = await reqPatchQuest(questId, { is_complete: isComplete })
    if (res.status === 200) {
      setGoals((prev) => [
        ...prev.map((g) =>
          g.id === goal.id
            ? {
                ...g,
                quests: g.quests.map((q) =>
                  q.id === questId ? { ...q, isComplete } : q
                ),
              }
            : g
        ),
      ])
    }
  }
  const getGoal = async () => {
    const existGoal = goals.find((g) => g.id === +id)
    if (existGoal) {
      setGoal(existGoal)
      return
    }
    const res = await reqGetGoals({ id })
    if (res.status === 200) {
      setGoals((prev) => [...prev, res.data])
      setGoal(res.data)
    } else alert("목표를 불러오는데 실패했습니다.")
  }
  const onClickCompleteButton = () => {
    setIsCheckModalOpen(true)
    setCheckModal(CONFIRM_COMPLETE_MODAL)
  }
  useEffect(() => {
    getGoal()
  }, [id, goals])
  return (
    <Container>
      {!goal ? (
        <Loading />
      ) : (
        <>
          <Header>
            <BackwardButton />
            <HeaderFlex>
              <Flex gap={10} align="end">
                <Icon>{goal.icon}</Icon>
                <Label>{goal.category}</Label>
              </Flex>
              <Title>{goal.title}</Title>
            </HeaderFlex>
          </Header>
          <CompleteButton $variant="secondary" onClick={onClickCompleteButton}>
            목표 완료
          </CompleteButton>
          <Description>
            해당 목표를 위한 <Highlight>퀘스트</Highlight>
            <RightText>
              {goal.quests.filter((q) => q.isComplete).length}/
              {goal.quests.length}
            </RightText>
          </Description>
          <QuestContainer>
            <CheckQuests
              quests={goal.quests}
              onChange={onChangeQuestComplete}
            />
          </QuestContainer>
          <Button $variant="primary">
            <PlusSVG stroke="#000" /> 퀘스트 추가하기
          </Button>
        </>
      )}
      <CheckModal open={isCheckModalOpen} {...checkModal} />
    </Container>
  )
}
