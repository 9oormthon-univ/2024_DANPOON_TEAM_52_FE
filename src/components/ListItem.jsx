import { styled } from "styled-components"
import { Flex } from "antd"
import { Skeleton } from "antd"

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
  gap: 16px;
  min-width: 100%;
  margin-right: 1px;
  background-color: #2c2c2ccc;
  padding: 20px 27px;
`

const Icon = styled.span`
  font-size: 19px;
`

const Title = styled.h3`
  font-size: 15px;
  font-weight: 600;
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
}) {
  return (
    <ListItemContainer>
      <InnerContainer onClick={onClick}>
        <Icon>{icon}</Icon>
        <Flex vertical flex={1} align="center" gap={5}>
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}
        </Flex>
        <Label>{label}</Label>
      </InnerContainer>
      <Flex>
        {option?.editVisible && <EditButton onClick={onEdit}>수정</EditButton>}
        {option?.deleteVisible && (
          <DeleteButton onClick={onDelete}>삭제</DeleteButton>
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
