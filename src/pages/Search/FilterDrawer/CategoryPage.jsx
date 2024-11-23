import {
  Container,
  Header,
  Title,
  ListContainer,
  ButtonContainer,
  InitButton,
  SaveButton,
  LeftIcon,
  RadioGroup,
} from "./styled"
import { useState } from "react"

export default function CategoryPage({ filter, setFilter, setStatus }) {
  const [selected, setSelected] = useState(filter.category)
  const options = [
    {
      label: "직군 전체",
      value: "all",
    },
    {
      label: "기획 · 전략",
      value: "기획 · 전략",
    },
    {
      label: "마케팅 · 홍보 · 조사",
      value: "마케팅 · 홍보 · 조사",
    },
  ]
  return (
    <Container>
      <Header>
        <LeftIcon onClick={() => setStatus("filter")} />
        <Title>직군 선택</Title>
      </Header>
      <ListContainer>
        <RadioGroup
          options={options}
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        />
      </ListContainer>
      <ButtonContainer>
        <InitButton>초기화</InitButton>
        <SaveButton
          $variant="secondary"
          onClick={() => {
            setFilter((prev) => ({ ...prev, category: selected }))
            setStatus("name")
          }}
        >
          선택완료
        </SaveButton>
      </ButtonContainer>
    </Container>
  )
}
