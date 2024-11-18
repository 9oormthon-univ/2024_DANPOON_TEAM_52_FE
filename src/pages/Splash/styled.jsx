import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const AnimatedLogo = styled(motion.div)`
  position: relative;
  overflow: visible;
`

export const GradientBackground = styled(motion.div)`
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

export const LogoContainer = styled(motion.div)``

export const StarContainer = styled(motion.div)`
  position: absolute;
  top: 5px;
  left: 130px;
`