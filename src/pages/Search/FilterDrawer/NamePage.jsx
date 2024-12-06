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
import { useRecoilState, useRecoilValue } from "recoil"
import {
  recommendFilterAtom,
  selectedRecommendFilterAtom,
} from "../../../store/atoms/recommendFilter"

export default function NamePage() {
  const [selectedRecommendFilter, setSelectedRecommendFilter] = useRecoilState(
    selectedRecommendFilterAtom
  )
  const recommendFilter = useRecoilValue(recommendFilterAtom)
  const options = Object.values(
    recommendFilter[selectedRecommendFilter.category]
  )
    .flat()
    .map((v) => ({
      label: v.name,
      value: v.id,
    }))
  return (
    <Container>
      <Header>
        <LeftIcon
          onClick={() => {
            setSelectedRecommendFilter((prev) => ({
              ...prev,
              status: "category",
            }))
          }}
        />
        <Title>직군 선택</Title>
      </Header>
      <ListContainer>
        <CheckGroup
          options={options}
          value={selectedRecommendFilter.name}
          onChange={(e) => {
            setSelectedRecommendFilter((prev) => ({
              ...prev,
              name: e,
            }))
          }}
        />
      </ListContainer>
      <ButtonContainer>
        <InitButton>초기화</InitButton>
        <SaveButton
          $variant="secondary"
          onClick={() => {
            setSelectedRecommendFilter((prev) => ({
              ...prev,
              status: "filter",
            }))
          }}
        >
          선택완료
        </SaveButton>
      </ButtonContainer>
    </Container>
  )
}
