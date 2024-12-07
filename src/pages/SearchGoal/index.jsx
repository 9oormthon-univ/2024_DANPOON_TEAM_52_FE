import { useNavigate, useParams } from "react-router-dom"
import {
  Container,
  HorizontalContainer,
  QuestsContainer,
  StyledText,
  ScrollContainer,
} from "./styled"
import Button from "../../components/Button"
import BaseLayout from "../../components/BaseLayout"
import BackwardButton from "../../components/BackwardButton"
import ConstellationCard from "../../components/ConstellationCard"
import ShadowContainer from "../../components/ShadowContainer"
import { ROUTES_PATH_HOME, ROUTES_PATH_SEARCH } from "../../constants/routes"
import { useEffect, useState } from "react"
import { reqGetSearchGoal, reqPostGoal } from "../../apis/goal"
import { DEFAULT_GOAL } from "../../constants/goal"
import CheckListItem from "../../components/CheckListItem"
import { CheckModal } from "../../components/Modal"
import Confetti2 from "../../components/Confetti2"
export default function SearchGoal() {
  const { id } = useParams()
  const navigate = useNavigate()
  const goCompleteGoal = () => navigate(ROUTES_PATH_SEARCH)
  const [goal, setGoal] = useState(DEFAULT_GOAL)
  const [quests, setQuests] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)
  const onClickAddResume = async () => {
    const res = await reqPostGoal({
      title: goal.title,
      category: goal.category,
      quests: quests.map((quest) => ({ title: quest })),
    })
    if (res.status === 200) {
      setIsSuccess(true)
    } else alert("목표와 퀘스트 추가에 실패했습니다.")
  }

  const onChange = (title, checked) => {
    setQuests((prev) => {
      if (checked) return [...prev, title]
      return prev.filter((quest) => quest !== title)
    })
  }
  const getGoal = async () => {
    const res = await reqGetSearchGoal(id)
    if (res.status === 200) {
      setGoal(res.data)
    } else alert("목표를 불러오는데 실패했습니다.")
  }
  useEffect(() => {
    getGoal()
  }, [])
  return (
    <BaseLayout>
      <Container>
        <HorizontalContainer>
          <BackwardButton onClick={goCompleteGoal} />
          <ConstellationCard
            goal={{ ...goal, quests, id: goal.title.length }}
          />
        </HorizontalContainer>
        <StyledText>목표와 함께 추가할 퀘스트를 선택하세요</StyledText>
        <ShadowContainer>
          <ScrollContainer>
            <QuestsContainer>
              {goal.quests.map((quest, idx) => (
                <CheckListItem
                  key={idx}
                  option={{ $checkboxVisible: false }}
                  onChange={(e) => onChange(quest.title, e.target.checked)}
                >
                  {quest.title}
                </CheckListItem>
              ))}
            </QuestsContainer>
          </ScrollContainer>
        </ShadowContainer>
        {!goal.isResume && (
          <Button onClick={onClickAddResume} $variant="primary">
            목표와 퀘스트 추가하기
          </Button>
        )}
        <CheckModal
          open={isSuccess}
          onCancel={() => {
            setIsSuccess(false)
          }}
          title="목표 추가 성공!"
          onConfirm={() => {
            navigate(ROUTES_PATH_HOME)
          }}
          confirmText="확인"
          backgroundChildren={<Confetti2 />}
        />
      </Container>
    </BaseLayout>
  )
}
