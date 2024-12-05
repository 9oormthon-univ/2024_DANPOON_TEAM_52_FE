import { useEffect, useState } from "react"
import { reqGetShareResume } from "../../../apis/shareResume"
import { useParams } from "react-router-dom"
import * as S from "../styled"
import { Highlight } from "../../../components/Typo"
import CategoryItem from "../CategoryItem"
import { useGroupedData } from "../../../hooks/useMypage"
export default function ShareResume() {
  const [userProfile, setUserProfile] = useState("")
  const [groupedData, setGroupedData] = useState()
  const { id } = useParams() // URL의 :id 값 추출
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await reqGetShareResume(id)
        if (response) {
          setUserProfile({
            nickname: response.nickname,
            profile_image: response.profile_image,
          })
          const grouped = useGroupedData(response)
          setGroupedData(grouped)
        }
      } catch (error) {
        console.error("잘못된 접근입니다!", error)
      }
    }
    fetchData()
  }, [])
  return (
    <S.Wrapper>
      <S.ProfileInfo>
        <S.ProfileImg src={userProfile.profile_image} alt="이미지없음" />
        <S.InfoGroup>
          <S.InfoText>
            <Highlight>{userProfile.nickname}</Highlight>님의 이력
          </S.InfoText>
        </S.InfoGroup>
      </S.ProfileInfo>
      <S.ContentWrapper style={{ maxHeight: "70vh" }}>
        {groupedData?.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </S.ContentWrapper>
    </S.Wrapper>
  )
}
