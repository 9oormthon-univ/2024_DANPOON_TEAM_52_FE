import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-width: 254px;
  padding: 15px 20px;
  gap: 25px;
  border-radius: 20px;
  background: #1a1a20cc;
  margin: 50px 0 150px;
  overflow: visible;
  box-shadow: 8px 6px 4px rgba(0, 0, 0, 0.5);
`

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Icon = styled.span`
  font-size: 17px;
`
const Label = styled.div`
  font-size: 13px;
  color: #c8c8c8;
  font-weight: 500;
`

const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
`

const Ul = styled.ul`
  font-size: 11px;
  color: #c8c8c8;
  font-weight: 400;
  list-style-type: disc;
  margin-left: 20px;
`

export default function GoalCard({ goal }) {
  return (
    <Container>
      <LabelContainer>
        <Icon>{goal.icon}</Icon>
        <Label>{goal.category}</Label>
      </LabelContainer>
      <Title>{goal.title}</Title>
      <Ul>
        {goal.description?.map((quest) => (
          <li key={quest}>{quest}</li>
        ))}
      </Ul>
    </Container>
  )
}
