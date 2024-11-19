import { useState } from "react"
import BaseLayout from "../../components/BaseLayout"
import { Container, Description, Title } from "./styled"
import { TabsContent, TabsHeader } from "../../components/Tabs"
import ListItem from "../../components/ListItem"
import ProgressGoals from "./ProgressGoals"

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0)
  const tabs = [
    {
      title: "진행중인 목표",
      description: "순서를 바꿔 진행중인 목표의 우선 순위를 수정해요",
      content: <ProgressGoals />,
    },
    {
      title: "완료한 목표",
      description: "달성한 목표를 별자리 형태로 확인해요",
      content: (
        <ListItem
          icon={"🪪"}
          title={"데이터 기반 기획 능력 강화하기"}
          label={"2/3"}
        />
      ),
    },
  ]
  return (
    <BaseLayout>
      <Container>
        <Title>나의 목표</Title>
        <Description>{tabs[selectedTab].description}</Description>
        <TabsHeader tabs={tabs} value={selectedTab} onChange={setSelectedTab} />
        <TabsContent tabs={tabs} value={selectedTab} />
      </Container>
    </BaseLayout>
  )
}
