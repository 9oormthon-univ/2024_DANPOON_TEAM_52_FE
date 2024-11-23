import Logo from "./Logo"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Spin } from "antd"

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const LogoContainer = styled.div`
  position: relative;
  margin-bottom: 100px;
`

const GradientBackground = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 196px;
  height: 196px;
  border-radius: 50%;
  flex-shrink: 0;
  background: linear-gradient(
    116deg,
    rgba(78, 197, 199, 0.3) 26.37%,
    rgba(109, 210, 201, 0.3) 43.17%,
    rgba(195, 248, 206, 0.3) 88.6%
  );
  filter: blur(73.30000305175781px);
`

const Spinner = styled(Spin)`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  & .ant-spin-dot-holder {
    color: #8afaf1;
  }
`

export default function Loading() {
  return (
    <Container>
      <LogoContainer>
        <GradientBackground
          animate={{
            opacity: [0.3, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <Logo />
      </LogoContainer>
      <Spinner size="large" />
    </Container>
  )
}
