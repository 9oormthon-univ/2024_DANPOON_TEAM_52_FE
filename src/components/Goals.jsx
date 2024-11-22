import { styled } from "styled-components"
import ScrollContainer from "./ScrollContainer"
import ListItem, { ListItemSkeleton } from "./ListItem"
import { useNavigate } from "react-router-dom"
import { ROUTES_PATH_GOAL } from "../constants/routes"
import ShadowContainer from "./ShadowContainer"
import { useRecoilState } from "recoil"
import goalAtom from "../store/atoms/goal"

const Container = styled(ScrollContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  gap: 15px;
  & > div:first-child {
    margin-top: 30px;
  }
  & > div:last-child {
    margin-bottom: 30px;
  }
  &::-webkit-scrollbar-button:vertical:start:increment,
  &::-webkit-scrollbar-button:vertical:end:decrement {
    display: block;
    height: 30px;
  }
`

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #7d7d7d;
  text-align: center;
  line-height: 1.5;
`

export default function Goals({ loading, option, onEdit }) {
  const navigate = useNavigate()
  const [goals, setGoals] = useRecoilState(goalAtom)
  const onDelete = (id) => {
    setGoals((prev) => prev.filter((v) => v.id !== id))
  }
  return (
    <ShadowContainer>
      <Container>
        {loading ? (
          <>
            <ListItemSkeleton active={true} />
            <ListItemSkeleton active={true} />
            <ListItemSkeleton active={true} />
          </>
        ) : (
          <>
            {goals.length === 0 && (
              <Placeholder>
                목표를 추가하고
                <br />
                퀘스트를 진행하여 달성해요
              </Placeholder>
            )}
            {goals.map((item, index) => (
              <ListItem
                key={index}
                icon={item.icon}
                title={item.title}
                label={
                  option?.labelHidden
                    ? ""
                    : `${item.quests.filter((v) => v.isComplete).length}/${item.quests.length}`
                }
                onClick={() => navigate(`${ROUTES_PATH_GOAL}/${item.id}`)}
                onEdit={() => onEdit(item)}
                onDelete={() => onDelete(item.id)}
                option={{
                  deleteVisible: option?.deleteVisible,
                  editVisible: option?.editVisible,
                }}
              />
            ))}
          </>
        )}
      </Container>
    </ShadowContainer>
  )
}
