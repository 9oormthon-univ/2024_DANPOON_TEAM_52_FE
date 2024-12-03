import { useEffect, useState } from "react"
import { reqGetShareResume } from "../../../apis/shareResume"
import { useParams } from "react-router-dom"
import * as S from "../styled"
import { Highlight } from "../../../components/Typo"
import CategoryItem from "../CategoryItem"
import { useGroupedData } from "../../../hooks/useMypage"
export default function ShareResume() {
  const [groupedData, setGroupedData] = useState()
  const tmpUser = {
    nickname: "임시이름",
    image_url: "",
  }
  const { id } = useParams() // URL의 :id 값 추출
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await reqGetShareResume(id)
        const grouped = useGroupedData(response)
        setGroupedData(grouped)
        console.log(grouped)
      } catch (error) {
        console.error("잘못된 접근입니다!", error)
      }
    }
    fetchData()
  }, [])
  return (
    <S.Wrapper>
      <S.ProfileInfo>
        <S.ProfileImg src={tmpUser.image_url} />
        <S.InfoGroup>
          <S.InfoText>
            <Highlight>{tmpUser.nickname}</Highlight>님의 이력
          </S.InfoText>
        </S.InfoGroup>
      </S.ProfileInfo>
      <S.ContentWrapper>
        {groupedData?.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </S.ContentWrapper>
    </S.Wrapper>
  )
}
