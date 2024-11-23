import { styled } from "styled-components"
import { Flex } from "antd"
import { Skeleton } from "antd"

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  background-color: #2c2c2ccc;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  padding: 20px 27px;
  cursor: pointer;
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

export default function ListItem({ icon, title, description, label, onClick }) {
  return (
    <ListItemContainer onClick={onClick}>
      <Icon>{icon}</Icon>
      <Flex vertical flex={1} align="center" gap={5}>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Flex>
      <Label>{label}</Label>
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
