import { ReactComponent as StarSVG } from "../../svgs/star.svg"
import {
  Container,
  AnimatedLogo,
  GradientBackground,
  LogoContainer,
  StarContainer,
} from "./styled"
import Logo from "../../components/Logo"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES_PATH_LOGIN } from "../../constants/routes"

const starVariants = {
  initial: {
    scale: 60,
    zIndex: 1,
  },
  shrunk: {
    scale: 1,
    zIndex: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
  shiny: {
    scale: 0.9,
    zIndex: 0,
    transition: {
      delay: 0.3,
      duration: 0.1,
    },
  },
}

const opacityVariants = {
  initial: {
    opacity: 0,
  },
  shrunk: {
    opacity: 0,
  },
  shiny: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
}

export default function Splash() {
  const navigate = useNavigate()
  const [variant, setVariant] = useState("shrunk")
  return (
    <Container>
      <AnimatedLogo
        layoutId="logoContainer"
        initial="initial"
        animate={variant}
        onAnimationComplete={() => {
          if (variant === "shrunk") {
            setVariant("shiny")
          } else if (variant === "shiny") {
            setTimeout(() => {
              navigate(ROUTES_PATH_LOGIN)
            }, 1000)
          }
        }}
      >
        <GradientBackground variants={opacityVariants} layoutId="background" />
        <StarContainer variants={starVariants}>
          <StarSVG />
        </StarContainer>
        <LogoContainer variants={opacityVariants} layoutId="logo">
          <Logo />
        </LogoContainer>
      </AnimatedLogo>
    </Container>
  )
}
