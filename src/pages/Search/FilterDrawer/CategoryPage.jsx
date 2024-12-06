import {
  recommendFilterAtom,
  selectedRecommendFilterAtom,
} from "../../../store/atoms/recommendFilter"
import { useRecoilState, useRecoilValue } from "recoil"
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

export default function CategoryPage() {
  const [selectedRecommendFilter, setSelectedRecommendFilter] = useRecoilState(
    selectedRecommendFilterAtom
  )
  const recommendFilter = useRecoilValue(recommendFilterAtom)
  const options = Object.keys(recommendFilter).map((v) => ({
    label: v,
    value: v,
  }))
  return (
    <Container>
      <Header>
        <LeftIcon
          onClick={() =>
            setSelectedRecommendFilter((prev) => ({
              ...prev,
              status: "filter",
            }))
          }
        />
        <Title>직군 선택</Title>
      </Header>
      <ListContainer>
        <RadioGroup
          options={options}
          value={selectedRecommendFilter.category}
          onChange={(e) =>
            setSelectedRecommendFilter((prev) => ({
              ...prev,
              category: e.target.value,
            }))
          }
        />
      </ListContainer>
      <ButtonContainer>
        <InitButton
          onClick={() => {
            setSelectedRecommendFilter((prev) => ({
              ...prev,
              category: "all",
            }))
          }}
        >
          초기화
        </InitButton>
        <SaveButton
          $variant="secondary"
          onClick={() => {
            setSelectedRecommendFilter((prev) => ({
              ...prev,
              status: "name",
            }))
          }}
        >
          선택완료
        </SaveButton>
      </ButtonContainer>
    </Container>
  )
}
