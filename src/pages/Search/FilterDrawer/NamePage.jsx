import {
  Container,
  Header,
  Title,
  ListContainer,
  ButtonContainer,
  InitButton,
  SaveButton,
  LeftIcon,
  CheckGroup,
} from "./styled"
import { useState } from "react"

export default function NamePage({ setFilter, setStatus, close }) {
  const [selected, setSelected] = useState([])
  const options = [
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
        <CheckGroup
          options={options}
          value={selected}
          onChange={(e) => setSelected(e)}
        />
      </ListContainer>
      <ButtonContainer>
        <InitButton>초기화</InitButton>
        <SaveButton
          $variant="secondary"
          onClick={() => {
            setFilter((prev) => ({ ...prev, name: selected }))
            close()
          }}
        >
          선택완료
        </SaveButton>
      </ButtonContainer>
    </Container>
  )
}
