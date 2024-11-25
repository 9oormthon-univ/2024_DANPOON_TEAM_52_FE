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

export default function CheckQuests({ quests, loading }) {
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
            {quests.map((item, index) => (
              <CheckListItem
                key={index}
                name={"quests"}
                value={item.id}
                defaultChecked={item.isComplete}
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
