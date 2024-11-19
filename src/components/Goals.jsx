import { styled } from "styled-components"
import ScrollContainer from "./ScrollContainer"
import ListItem, { ListItemSkeleton } from "./ListItem"

export const Container = styled(ScrollContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  gap: 15px;
`

export default function Goals({ goals, loading }) {
  return (
    <Container>
      {loading ? (
        <>
          <ListItemSkeleton active={true} style={{ width: 160 }} />
          <ListItemSkeleton active={true} style={{ width: 160 }} />
          <ListItemSkeleton active={true} style={{ width: 160 }} />
        </>
      ) : (
        <>
          {goals.map((item, index) => (
            <ListItem
              key={index}
              icon={item.icon}
              title={item.title}
              label={item.label}
            />
          ))}
        </>
      )}
    </Container>
  )
}
