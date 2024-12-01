import { styled } from "styled-components"
import ScrollContainer from "./ScrollContainer"
import ListItem, { ListItemSkeleton } from "./ListItem"
import ShadowContainer from "./ShadowContainer"
import { CATEGORIES } from "../constants/dummy"

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

export default function Goals({
  goals,
  loading,
  option,
  onClick,
  onEdit,
  onDelete,
}) {
  return (
    <ShadowContainer>
      <Container>
        {loading ? (
          <>
            {new Array(3).fill(0).map((_, index) => (
              <ListItemSkeleton key={index} active={true} />
            ))}
          </>
        ) : (
          <>
            {!goals?.length ? (
              <Placeholder>
                목표를 추가하고
                <br />
                퀘스트를 진행하여 달성해요
              </Placeholder>
            ) : (
              goals.map((item) => (
                <ListItem
                  key={item.id}
                  icon={CATEGORIES.find((v) => v.value === item.category)?.icon}
                  title={item.title}
                  label={
                    option?.labelHidden
                      ? ""
                      : `${item.quests.filter((v) => v.isComplete).length}/${item.quests.length}`
                  }
                  onClick={() => onClick?.(item)}
                  onEdit={() => onEdit?.(item)}
                  onDelete={() => onDelete?.(item)}
                  option={{
                    deleteVisible: option?.deleteVisible,
                    editVisible: option?.editVisible,
                  }}
                />
              ))
            )}
          </>
        )}
      </Container>
    </ShadowContainer>
  )
}
