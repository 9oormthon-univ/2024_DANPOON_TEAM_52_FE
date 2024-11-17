import styled from "styled-components"
import { motion } from "framer-motion"
import LogoComponent from "../../components/Logo"
import TypoComponent from "../../components/Typo"

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
`

export const LogoContainer = styled(motion.div)`
  position: relative;
  overflow: visible;
`

export const GradientBackground = styled(motion.div)`
  position: absolute;
  top: -30px;
  left: 58px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  flex-shrink: 0;
  background: linear-gradient(
    116deg,
    rgba(78, 197, 199, 0.3) 26.37%,
    rgba(109, 210, 201, 0.3) 43.17%,
    rgba(195, 248, 206, 0.3) 88.6%
  );
  filter: blur(35px);
`

export const Logo = styled(LogoComponent)`
  &&& {
    margin-bottom: 45px;
  }
`

export const Title = styled(TypoComponent.Title)`
  &&& {
    margin-bottom: 65px;
  }
`

export const Text = styled(TypoComponent.Text)`
  &&& {
    margin-bottom: 20px;
  }
`

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`
