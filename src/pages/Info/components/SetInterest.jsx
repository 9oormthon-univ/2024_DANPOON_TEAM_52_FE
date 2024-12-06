import { popStateFunc } from "../../../utils/utilfunc"
import { jobData } from "../../../constants/data"
import { usePickedItems } from "../../../hooks/usePickedItems"
import { useStepNavigation } from "../../../hooks/useStepNavigation"
import { useNavigate } from "react-router-dom"
import {
  BackBtn,
  BodyWrapper,
  Content,
  GridWrapper,
  ItemBtn,
  MainTitle,
  NextBtn,
  Option,
  Wrapper,
} from "../styled"
import { Highlight } from "../../../components/Typo"
import { useEffect, useState } from "react"
import { reqGetJob, reqPostJob } from "../../../apis/job"
import userJobAtom from "../../../store/atoms/userjob"
import { useRecoilState } from "recoil"
const SetInterest = ({ detailJob, setDetailJob, allJobData }) => {
  const [userJob, setUserJob] = useRecoilState(userJobAtom)
  const navigate = useNavigate() // 컴포넌트 내부에서 useNavigate 호출
  const { paramsInterestItem, paramsJobItem } = useStepNavigation()
  const { pickedItems } = usePickedItems(paramsInterestItem, () =>
    popStateFunc(2, paramsJobItem, pickedItems)
  )
  // 선택된 아이템을 저장할 상태
  const [selectedItems, setSelectedItems] = useState([])
  useEffect(() => {
    const fetchJobList = async () => {
      const response = await reqGetJob()
      const jobArray = Object.entries(response.jobs).map(([key, id]) => ({
        category: key,
        id: id,
      }))
      setUserJob(jobArray)
      //홈에서 뒤로가기 발생 시, params 활용하여 상세 직무 가져오기
      if (!detailJob) {
        setDetailJob(jobArray[paramsJobItem].id)
      }
    }
    fetchJobList()
  }, [])
  useEffect(() => {
    const handlePopState = () => {
      const updatedParams = new URLSearchParams(window.location.search)
      const newJobItem = updatedParams.get("jobItem")
      const newInterestItem = updatedParams.get("interestItem")

      if (newJobItem && !isNaN(parseInt(newJobItem))) {
        setDetailJob(userJob[parseInt(newJobItem)].id)
      }

      if (newInterestItem) {
        setSelectedItems(newInterestItem.split(","))
      }
    }

    window.addEventListener("popstate", handlePopState)
    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [userJob, setDetailJob])
  // 선택/해제 함수
  const handleSelectItem = (id) => {
    setSelectedItems(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((itemId) => itemId !== id) // 이미 선택된 경우 해제
          : [...prevSelected, id] // 선택되지 않은 경우 추가
    )
  }

  return (
    <Wrapper>
      <BackBtn />
      <Content>
        <MainTitle>
          <Highlight>{jobData[parseInt(paramsJobItem)]}</Highlight>
          <span style={{ color: "white" }}> 직무에서</span>
        </MainTitle>
        <MainTitle style={{ color: "white", marginBottom: "10px" }}>
          <Highlight>세부 직무</Highlight>를 선택해주세요
        </MainTitle>
        <Option>중복 선택이 가능해요</Option>
      </Content>

      <BodyWrapper>
        <GridWrapper>
          {detailJob?.map((job) => (
            <ItemBtn
              key={job.id}
              isSelected={selectedItems.includes(job.id)} // 선택 여부 확인
              onClick={() => handleSelectItem(job.id)} // 클릭 시 선택/해제
            >
              {job.name} {/* 직무 이름 렌더링 */}
            </ItemBtn>
          ))}
        </GridWrapper>
        <NextBtn
          $variant={selectedItems.length !== 0 ? "primary" : "secondary"}
          disabled={selectedItems.length === 0} // 선택된 항목이 없으면 비활성화
          onClick={async () => {
            await reqPostJob(selectedItems, navigate, setUserJob)
          }}
        >
          {localStorage.getItem("backURL") === "true"
            ? "수정 완료"
            : "시작하기"}
        </NextBtn>
      </BodyWrapper>
    </Wrapper>
  )
}

export default SetInterest
