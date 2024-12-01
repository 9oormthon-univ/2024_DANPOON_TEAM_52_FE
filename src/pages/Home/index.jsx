import { useEffect, useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import BaseLayout from "../../components/BaseLayout"
import { Container, Description, Title } from "./styled"
import { TabsContent, TabsHeader } from "../../components/Tabs"
import ProgressGoals from "./ProgressGoals"
import CompleteGoals from "./CompleteGoals"
import GradientBackground from "../../components/GradientBackground"
import userInfoAtom from "../../store/atoms/userinfo"
import { useRecoilState } from "recoil"
import { reqGetUser } from "../../apis/user"
export default function Home() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const tab = searchParams.get("tab")
  const defaultTab = tab === "complete" ? 1 : 0
  const [selectedTab, setSelectedTab] = useState(defaultTab)
  const [userData, setUserData] = useRecoilState(userInfoAtom)
  const tabs = [
    {
      title: "진행중인 목표",
      description: "순서를 바꿔 진행중인 목표의 우선 순위를 수정해요",
      content: <ProgressGoals />,
    },
    {
      title: "완료한 목표",
      description: "달성한 목표를 별자리 형태로 확인해요",
      content: <CompleteGoals />,
    },
  ]
  useEffect(() => {
    const searchParmas = new URLSearchParams({
      tab: selectedTab === 0 ? "progress" : "complete",
    })
    navigate({ search: `?${searchParmas.toString()}` }, { replace: true })
  }, [selectedTab])
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await reqGetUser()
        if (response) {
          console.log("유저정보 조회 성공:", response.data)
          setUserData(response.data) // Atom 갱신
        }
      } catch (error) {
        console.error(
          "유저정보 조회 실패:",
          error.response?.data || error.message
        )
      }
    }
    fetchUserData()
  }, [])
  return (
    <>
      <BaseLayout>
        <Container>
          <Title>나의 목표</Title>
          <Description>{tabs[selectedTab].description}</Description>
          <TabsHeader
            tabs={tabs}
            value={selectedTab}
            onChange={setSelectedTab}
          />
          <TabsContent tabs={tabs} value={selectedTab} />
        </Container>
      </BaseLayout>
      <GradientBackground />
    </>
  )
}
