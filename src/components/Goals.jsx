import { styled } from "styled-components"
import ScrollContainer from "./ScrollContainer"
import ListItem, { ListItemSkeleton } from "./ListItem"
import { useNavigate } from "react-router-dom"
import { ROUTES_PATH_QUEST } from "../constants/routes"

export const ShadowContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: calc(100% - 20px);
    height: 30px;
    pointer-events: none;
    z-index: 1;
  }

  &::before {
    top: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent);
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
  }
`
export const Container = styled(ScrollContainer)`
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

export default function Goals({ goals, loading }) {
  const navigate = useNavigate()
  return (
    <ShadowContainer>
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
                onClick={() => navigate(`${ROUTES_PATH_QUEST}/${item.id}`)}
              />
            ))}
          </>
        )}
      </Container>
    </ShadowContainer>
  )
}
