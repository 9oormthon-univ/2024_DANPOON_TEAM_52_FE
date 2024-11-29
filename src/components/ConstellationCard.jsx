import styled from "styled-components"
import { Flex } from "antd"
import Constellation from "./Constellation"
import { CATEGORIES } from "../constants/dummy"
import { formatFullDateKorean } from "../utils/dateFormat"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: fit-content;
  overflow: visible;
  gap: 10px;
`

const Icon = styled.span`
  font-size: 16px;
`

const Label = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #c3c3c3;
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`
const Date = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: #c3c3c3;
`

const Description = styled.p`
  font-size: 13px;
  color: #828282;
  font-weight: 500;
`

const ConsterllationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  overflow: visible;
  margin: 20px 0 40px;
`

const GradientBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  flex-shrink: 0;
  background: linear-gradient(
    116deg,
    rgba(78, 197, 199, 0.4) 26.37%,
    rgba(109, 210, 201, 0.4) 43.17%,
    rgba(195, 248, 206, 0.4) 88.6%
  );
  filter: blur(73.30000305175781px);
  z-index: 0;
`

export default function ConstellationCard({ goal }) {
  return (
    <Container>
      <Flex gap={10} align="center">
        <Icon>{CATEGORIES.find((c) => c.value === goal.category).icon}</Icon>
        <Label>{CATEGORIES.find((c) => c.value === goal.category).label}</Label>
      </Flex>
      <Title>{goal.title}</Title>
      <Date>
        {formatFullDateKorean(goal.startDate)} ~{" "}
        {formatFullDateKorean(goal.completedDate)}
      </Date>
      <Description>{goal.description}</Description>
      <ConsterllationContainer>
        <Constellation id={goal.id} starCount={goal.quests.length} />
        <GradientBackground />
      </ConsterllationContainer>
    </Container>
  )
}
