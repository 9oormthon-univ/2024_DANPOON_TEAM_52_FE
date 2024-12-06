import { styled } from "styled-components"
import { Flex } from "antd"
import { Skeleton } from "antd"
import { useRef } from "react"
import { useDrag, useDrop } from "react-dnd"

const ListItemContainer = styled.div`
  display: flex;
  min-height: 60px;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  & > * {
    scroll-snap-align: end;
  }
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 100%;
  margin-right: 1px;
  background-color: #2c2c2ccc;
  padding: 20px 20px 20px 10px;
`

const Grab = styled.span`
  font-size: 20px;
  cursor: grab;
  font-weight: 600;
  color: #7d7d7d;
  padding: 0px 10px;
`

const Icon = styled.span`
  font-size: 19px;
  margin-right: 10px;
`

const Title = styled.h3`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.1;
  color: #fff;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`

const Description = styled.span`
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  color: #7d7d7d;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`

const Label = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #7d7d7d;
`

const EditButton = styled.button`
  padding: 23px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  background-color: #4d4d4d;
  border: none;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
`
const DeleteButton = styled.button`
  padding: 23px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  background-color: #d94242;
  border: none;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
`

export default function ListItem({
  icon,
  title,
  description,
  label,
  onClick,
  onEdit,
  onDelete,
  option,
} = {}) {
  const listItemRef = useRef(null)
  const [{}, drop] = useDrop({
    accept: "listitem",
    collect(monitor) {
      return {
        isOver: monitor.isOver(),
      }
    },
    hover(item, monitor) {
      if (!option.draggable) return
      if (!listItemRef.current) return
      const dragIndex = item.index
      const hoverIndex = option.draggable.index
      if (dragIndex === hoverIndex) return
      const hoverBoundingRect = listItemRef.current.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return
      option.draggable.move(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
    drop: () => {
      option?.draggable?.onChangeSequence?.()
    },
  })
  const [{ isDragging }, drag, preview] = useDrag({
    type: "listitem",
    item: () => {
      return { id: option?.draggable?.id, index: option?.draggable?.index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.3 : 1
  const eventHandler = (func) => {
    listItemRef.current.scrollTo({ behavior: "smooth", left: 0 })
    func()
  }
  drop(preview(listItemRef))
  return (
    <ListItemContainer ref={listItemRef} style={{ opacity }}>
      <InnerContainer onClick={() => eventHandler(onClick)}>
        {option?.draggable ? (
          <Grab ref={(node) => drag(node)}>::</Grab>
        ) : (
          <div style={{ width: 10 }} />
        )}
        <Icon>{icon}</Icon>
        <Flex vertical flex={1} align="center" gap={5}>
          {description && <Description>{description}</Description>}
          <Title>{title}</Title>
        </Flex>
        <Label>{label}</Label>
      </InnerContainer>
      <Flex>
        {option?.editVisible && (
          <EditButton onClick={() => eventHandler(onEdit)}>수정</EditButton>
        )}
        {option?.deleteVisible && (
          <DeleteButton onClick={() => eventHandler(onDelete)}>
            삭제
          </DeleteButton>
        )}
      </Flex>
    </ListItemContainer>
  )
}

export const ListItemSkeleton = styled(Skeleton.Node)`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: #2c2c2c;
  & > div {
    width: 100% !important;
    height: 100% !important;
  }
`
