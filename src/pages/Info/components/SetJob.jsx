import { jobData } from "../../../constants/data"
import { useStepNavigation } from "../../../hooks/useStepNavigation"
import { usePickedItems } from "../../../hooks/usePickedItems"
import { useEffect } from "react"
import {
  BodyWrapper,
  Content,
  GridWrapper,
  ItemBtn,
  MainTitle,
  NextBtn,
  Wrapper,
} from "../styled"
const SetJob = ({ onClickNext }) => {
  const { selectItem, jobItem, setJobItem } = usePickedItems()
  const { paramsJobItem } = useStepNavigation()
  useEffect(() => {
    if (paramsJobItem) {
      setJobItem(paramsJobItem)
    }
  }, [])
  return (
    <Wrapper>
      <Content>
        <MainTitle>
          <span style={{ color: "#8AFAF1" }}>희망 직무</span>
          <span>를</span>
        </MainTitle>
        <br />
        <MainTitle style={{ color: "white" }}>선택해주세요</MainTitle>
      </Content>
      <BodyWrapper>
        <GridWrapper>
          {jobData.map((el, index) => (
            <ItemBtn
              isSelected={parseInt(jobItem) === index}
              key={index}
              data-index={index}
              onClick={(event) => selectItem(event)}
            >
              {el}
            </ItemBtn>
          ))}
        </GridWrapper>
        <NextBtn
          $variant={jobItem.length !== 0 ? "default" : "secondary"}
          disabled={jobItem.length === 0 ? true : false}
          hasContent={jobItem !== ""}
          onClick={() => {
            onClickNext(jobItem)
          }}
        >
          다음
        </NextBtn>
      </BodyWrapper>
    </Wrapper>
  )
}

export default SetJob;
