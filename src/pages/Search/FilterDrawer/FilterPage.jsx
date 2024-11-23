import {
  Container,
  Header,
  Title,
  ListContainer,
  CategoryButton,
  ButtonContainer,
  SaveButton,
  RightIcon,
} from "./styled"

export default function FilterPage({ filter, setStatus }) {
  return (
    <Container>
      <Header>
        <Title>필터</Title>
      </Header>
      <ListContainer>
        <CategoryButton onClick={() => setStatus("category")}>
          직군 전체
          <RightIcon />
        </CategoryButton>
        <CategoryButton
          disabled={filter.category === "all"}
          onClick={() => setStatus("name")}
        >
          직무 전체
          <RightIcon />
        </CategoryButton>
      </ListContainer>
      <ButtonContainer>
        <SaveButton $variant="secondary">적용</SaveButton>
      </ButtonContainer>
    </Container>
  )
}
