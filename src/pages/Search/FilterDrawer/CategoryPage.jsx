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

export default function CategoryPage({ setFilter, setStatus }) {
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
        <RadioGroup options={options} />
      </ListContainer>
      <ButtonContainer>
        <InitButton>초기화</InitButton>
        <SaveButton $variant="secondary">선택완료</SaveButton>
      </ButtonContainer>
    </Container>
  )
}
