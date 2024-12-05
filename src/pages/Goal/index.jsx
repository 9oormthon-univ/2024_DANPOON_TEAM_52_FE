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
  RightText,
  SubDescription,
  Link,
} from "./styled"
import BackwardButton from "../../components/BackwardButton"
import { Flex } from "antd"
import Button from "../../components/Button"
import { ReactComponent as PlusSVG } from "../../svgs/plus.svg"
import { ReactComponent as AiSVG } from "../../svgs/Ai.svg"
import CheckQuests from "../../components/CheckQuests"
import { useRecoilState } from "recoil"
import { myGoalsAtom } from "../../store/atoms/goal"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { reqGetGoal } from "../../apis/goal"
import { DEFAULT_GOAL } from "../../constants/goal"
import { reqPatchQuest, reqDeleteQuest } from "../../apis/quest"
import { CheckModal } from "../../components/Modal"
import { reqCompleteGoal } from "../../apis/goal"
import Confetti from "../../components/Confetti"
import Loading from "../../components/Loading"
import {
  ROUTES_PATH_GOAL_CONSTELLATION,
  ROUTES_PATH_CUSTOMGUIDE,
  ROUTES_PATH_HOME,
} from "../../constants/routes"
import RecommendQuestModal from "../../components/Modals/RecommendQuestModal"
import QuestModal from "../../components/Modals/QuestModal"
import { CATEGORIES } from "../../constants/dummy"

export default function Quest() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [goals, setGoals] = useRecoilState(myGoalsAtom)
  const [goal, setGoal] = useState(DEFAULT_GOAL)
  const [checkModal, setCheckModal] = useState({
    open: false,
  })
  const [recommendQeustModal, setRecommendQuestModal] = useState({
    open: false,
  })
  const [questModal, setQuestModal] = useState({
    open: false,
    quest: {},
  })
  const CONFIRM_COMPLETE_MODAL = {
    open: true,
    title: "진행중인 목표를\n완료하시겠어요?",
    cancleText: "취소",
    confirmText: "완료",
    onCancle: () => setCheckModal({ open: false }),
    onConfirm: async () => {
      const res = await reqCompleteGoal(goal.id)
      if (res.status === 200) {
        setGoals((prev) =>
          prev.map((g) => (g.id === goal.id ? { ...g, isComplete: true } : g))
        )
        setCheckModal({
          open: true,
          title: "새로운 별자리가\n완성되었어요!",
          cancleText: "",
          confirmText: "확인",
          onConfirm: () => {
            setCheckModal({ open: false })
            navigate(`${ROUTES_PATH_GOAL_CONSTELLATION}/${goal.id}`, {
              replace: true,
            })
          },
          onCancle: () => {
            setCheckModal({ open: false })
            navigate(`${ROUTES_PATH_GOAL_CONSTELLATION}/${goal.id}`, {
              replace: true,
            })
          },
          backgroundChildren: <Confetti />,
        })
      }
    },
    backgroundChildren: null,
  }
  const RECOMMEND_QUEST_MODAL = {
    open: true,
    text: "퀘스트를 추천해드릴게요!",
    onClose: () => setRecommendQuestModal({ open: false }),
  }
  const onChangeQuestComplete = async (questId, isComplete) => {
    const res = await reqPatchQuest(questId, { isComplete })
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
      const isAllComplete = goal.quests.every(
        (q) =>
          (q.id !== questId && q.isComplete) || (q.id === questId && isComplete)
      )
      if (isAllComplete) {
        setCheckModal({
          ...CONFIRM_COMPLETE_MODAL,
          title: "모든 퀘스트를 완료하셨어요!\n목표를 완료하시겠어요?",
          onCancle: () => {
            setCheckModal({ open: false })
            setRecommendQuestModal({
              ...RECOMMEND_QUEST_MODAL,
              text: "잘하고 있어요! 해당 목표와 관련된 다른 퀘스트를 추천해드릴게요.",
            })
          },
          open: true,
        })
      }
    }
  }
  const getGoal = async () => {
    const existGoal = goals.find((g) => g.id === +id)
    if (existGoal) {
      if (existGoal.isComplete) {
        navigate(`${ROUTES_PATH_GOAL_CONSTELLATION}/${goal.id}`, {
          replace: true,
        })
        return
      }
      setGoal(existGoal)
      return
    }
    const res = await reqGetGoal(id)
    if (res.status === 200) {
      if (res.data.isComplete) {
        navigate(`${ROUTES_PATH_GOAL_CONSTELLATION}/${goal.id}`, {
          replace: true,
        })
        return
      }
      setGoals((prev) => [...prev, res.data])
      setGoal(res.data)
    } else alert("목표를 불러오는데 실패했습니다.")
  }
  const onClickCompleteButton = () => {
    setCheckModal(CONFIRM_COMPLETE_MODAL)
  }
  const onClickRecommendQuest = () => {
    setRecommendQuestModal(RECOMMEND_QUEST_MODAL)
  }
  const onClickAddQuest = () => {
    setQuestModal({
      open: true,
      quest: { id: -1, title: "", isComplete: false },
    })
  }
  const onEditQuest = (quest) => {
    setQuestModal({ open: true, quest })
  }
  const onDeleteQuest = async (quest) => {
    const res = await reqDeleteQuest(quest.id)
    if (res.status === 200) {
      setGoals((prev) => [
        ...prev.map((g) =>
          g.id === goal.id
            ? {
                ...g,
                quests: g.quests.filter((q) => q.id !== quest.id),
              }
            : g
        ),
      ])
    }
  }

  const onCloseQuestModal = () => {
    setQuestModal({ open: false })
  }

  useEffect(() => {
    getGoal()
  }, [])

  useEffect(() => {
    if (goals.length === 0) return
    setGoal(goals.find((g) => g.id === +id))
  }, [goals])
  return (
    <Container>
      {!goal ? (
        <Loading />
      ) : (
        <>
          <Header>
            <BackwardButton onClick={() => navigate(ROUTES_PATH_HOME)} />
            <HeaderFlex>
              <Flex gap={10} align="end">
                <Icon>
                  {CATEGORIES.find((c) => c.value === goal.category).icon}
                </Icon>
                <Label>
                  {CATEGORIES.find((c) => c.value === goal.category).label}
                </Label>
              </Flex>
              <Title>{goal.title}</Title>
            </HeaderFlex>
          </Header>
          <CompleteButton $variant="secondary" onClick={onClickCompleteButton}>
            목표 완료
          </CompleteButton>
          <Flex justify="space-between">
            <Flex gap={6} vertical>
              <Description>해당 목표를 위한 퀘스트</Description>
              <SubDescription>
                <Link to={ROUTES_PATH_CUSTOMGUIDE}>맞춤형 설정</Link>을 입력하면
                더 개인화된 추천을 받을 수 있어요
              </SubDescription>
            </Flex>
            <RightText>
              {goal.quests.filter((q) => q.isComplete).length}/
              {goal.quests.length}
            </RightText>
          </Flex>
          <QuestContainer>
            <CheckQuests
              quests={goal.quests}
              onChange={onChangeQuestComplete}
              onEdit={onEditQuest}
              onDelete={onDeleteQuest}
            />
          </QuestContainer>

          <Flex vertical gap={14}>
            <Button onClick={onClickAddQuest}>
              <PlusSVG stroke="#fff" /> 퀘스트 추가하기
            </Button>
            <Button $variant="primary" onClick={onClickRecommendQuest}>
              <AiSVG /> 퀘스트 추천 받기
            </Button>
          </Flex>
        </>
      )}
      <CheckModal {...checkModal} />
      <RecommendQuestModal {...recommendQeustModal} />
      <QuestModal onClose={onCloseQuestModal} goalId={+id} {...questModal} />
    </Container>
  )
}
