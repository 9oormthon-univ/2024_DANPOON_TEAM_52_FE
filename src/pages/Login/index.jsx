import { Container, Logo, Title, Text } from "./styled";
import KakaoLoginButton from "../../components/KakaoLoginButton";

export default function Login() {
  return (
    <Container>
      <Logo />
      <Title>로그인</Title>
      <Text>SNS로 간단하게 시작하기</Text>
      <KakaoLoginButton />
    </Container>
  );
}
