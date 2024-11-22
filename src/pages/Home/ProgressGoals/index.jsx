import { Container } from "./styled"
import Button from "../../../components/Button"
import { ReactComponent as PlusSVG } from "../../../svgs/plus.svg"
import Goals from "../../../components/Goals"
import { Flex } from "antd"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES_PATH_RECOMMENDED_GOALS } from "../../../constants/routes"

export default function ProgressGoals() {
  const list = [
    {
      icon: "️🗓️",
      title: "구름톤 회의",
      description: "2024.01.03",
      label: "일정",
    },
    {
      icon: "📝",
      title: "구름톤 회의록 작성",
      description: "2024.01.03",
      label: "일정",
    },
    {
      icon: "📞",
      title: "구름톤 회의록 검토",
      description: "2024.01.03",
      label: "일정",
    },
    {
      icon: "📞",
      title: "구름톤 회의록 검토",
      description: "2024.01.03",
      label: "일정",
    },
    {
      icon: "📞",
      title: "구름톤 회의록 검토",
      description: "2024.01.03",
      label: "일정",
    },
    {
      icon: "📞",
      title: "구름톤 회의록 검토",
      description: "2024.01.03",
      label: "일정",
    },
    {
      icon: "📞",
      title: "구름톤 회의록 검토",
      description: "2024.01.03",
      label: "일정",
    },
  ]
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <Container>
      <Goals goals={list} loading={loading} />
      <Flex vertical gap={14}>
        <Button $variant="secondary">
          <PlusSVG stroke="#fff" /> 목표 추가하기
        </Button>
        <Button
          $variant="primary"
          onClick={() => navigate(ROUTES_PATH_RECOMMENDED_GOALS)}
        >
          AI에게 목표 추천 받기
        </Button>
      </Flex>
    </Container>
  )
}
