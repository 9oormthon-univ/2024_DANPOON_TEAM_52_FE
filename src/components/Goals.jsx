import { styled } from "styled-components"
import ScrollContainer from "./ScrollContainer"
import ListItem, { ListItemSkeleton } from "./ListItem"
import { useNavigate } from "react-router-dom"
import { ROUTES_PATH_GOAL } from "../constants/routes"
import ShadowContainer from "./ShadowContainer"

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

export default function Goals({ goals, loading, option, onClick }) {
  const navigate = useNavigate()
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
            {goals.map((item, index) => (
              <ListItem
                key={index}
                icon={item.icon}
                title={item.title}
                label={option?.labelHidden ? "" : item.label}
                onClick={
                  onClick
                    ? onClick
                    : () => navigate(`${ROUTES_PATH_GOAL}/${item.id}`)
                }
              />
            ))}
          </>
        )}
      </Container>
    </ShadowContainer>
  )
}
