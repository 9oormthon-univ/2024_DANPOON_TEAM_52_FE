import {
  Container,
  Logo,
  Title,
  Text,
  LogoContainer,
  GradientBackground,
} from "./styled"
import KakaoLoginButton from "../../components/KakaoLoginButton"
import { motion } from "framer-motion"

export default function Login() {
  return (
    <Container>
      <LogoContainer>
        <GradientBackground layoutId="gradientBackground" />
        <motion.div layoutId="logo">
          <Logo width={142} />
        </motion.div>
      </LogoContainer>
      <Title>로그인</Title>
      <Text>SNS로 간단하게 시작하기</Text>
      <KakaoLoginButton />
    </Container>
  )
}
