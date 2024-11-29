import { styled } from "styled-components"
import ScrollContainer from "./ScrollContainer"
import CheckListItem from "./CheckListItem"
import { ListItemSkeleton } from "./ListItem"
import ShadowContainer from "./ShadowContainer"

export const Container = styled(ScrollContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  gap: 15px;
  & > *:first-child {
    margin-top: 30px;
  }
  & > *:last-child {
    margin-bottom: 30px;
  }
  &::-webkit-scrollbar-button:vertical:start:increment,
  &::-webkit-scrollbar-button:vertical:end:decrement {
    display: block;
    height: 30px;
  }
`

export default function CheckQuests({
  quests,
  loading,
  onChange,
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
            {[...quests]
              .sort((a, b) => a.isComplete - b.isComplete)
              .map((item, index) => (
                <CheckListItem
                  key={item.id}
                  value={item.id}
                  defaultChecked={item.isComplete}
                  onChange={(e) => onChange(e.target.value, e.target.checked)}
                  onEdit={() => onEdit?.(item)}
                  onDelete={() => onDelete?.(item)}
                  option={{
                    deleteVisible: true,
                    editVisible: true,
                  }}
                >
                  {item.title}
                </CheckListItem>
              ))}
          </>
        )}
      </Container>
    </ShadowContainer>
  )
}
