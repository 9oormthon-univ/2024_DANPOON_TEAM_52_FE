import { styled } from "styled-components"
import ScrollContainer from "./ScrollContainer"
import ListItem, { ListItemSkeleton } from "./ListItem"
import ShadowContainer from "./ShadowContainer"
import { CATEGORIES } from "../constants/dummy"
import { DndProvider } from "react-dnd-multi-backend"
import { HTML5toTouch } from "rdndmb-html5-to-touch"
import { useState, useEffect, useRef } from "react"
import { useDndScrolling } from "react-dnd-scrolling"

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

export default function GoalsContainer(props) {
  return (
    <ShadowContainer>
      <DndProvider options={HTML5toTouch}>
        <Goals {...props} />
      </DndProvider>
    </ShadowContainer>
  )
}

function Goals({
  goals,
  loading,
  option,
  onClick,
  onEdit,
  onDelete,
  onChangeSequence,
  placeholder,
}) {
  const scrollContainerRef = useRef()
  useDndScrolling(scrollContainerRef)
  const [sortedGoals, setSortedGoals] = useState([])
  const move = (dragIndex, hoverIndex) => {
    setSortedGoals((prev) => {
      const newGoals = [...prev]
      const dragItem = newGoals[dragIndex]
      newGoals.splice(dragIndex, 1)
      newGoals.splice(hoverIndex, 0, dragItem)
      return newGoals
    })
  }
  useEffect(() => {
    setSortedGoals(
      [...goals].sort((a, b) => {
        return a.sequence - b.sequence
      })
    )
  }, [goals])
  return (
    <Container ref={scrollContainerRef}>
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
              {placeholder || (
                <>
                  목표를 추가하고
                  <br />
                  퀘스트를 진행하여 달성해요
                </>
              )}
            </Placeholder>
          ) : (
            sortedGoals.map((item, idx) => (
              <ListItem
                key={item.id}
                icon={CATEGORIES.find((v) => v.value === item.category)?.icon}
                title={item.title}
                description={item.description}
                label={
                  option?.labelHidden
                    ? ""
                    : `${item.quests.filter((v) => v.isComplete).length}/${item.quests.length}`
                }
                onClick={() => onClick?.(item)}
                onEdit={() => onEdit?.(item)}
                onDelete={() => onDelete?.(item)}
                option={{
                  draggable: option?.draggable
                    ? {
                        id: item.id,
                        index: idx,
                        move,
                        onChangeSequence: () => onChangeSequence?.(sortedGoals),
                      }
                    : null,
                  deleteVisible: option?.deleteVisible,
                  editVisible: option?.editVisible,
                }}
              />
            ))
          )}
        </>
      )}
    </Container>
  )
}
