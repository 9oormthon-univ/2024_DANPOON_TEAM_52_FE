import { Flex } from "antd"
import { styled } from "styled-components"
import { NAVS } from "../constants/nav"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.$highlight ? "#fff" : "#aaa")};
  font-size: 12px;
  font-weight: 400;
  width: 80px;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 14px 10px 34px;
  background-color: #222;
  width: calc(100% + 20px);
  border-radius: 30px 30px 0 0;
`

const NavButton = ({ title, src, icon, highlight }) => {
  return (
    <NavLink to={src} $highlight={highlight}>
      <Flex vertical justify="center" align="center" gap={10}>
        {highlight ? icon.highlight : icon.default}
        {title}
      </Flex>
    </NavLink>
  )
}

const Nav = () => {
  const location = useLocation()
  return (
    <NavContainer>
      {NAVS.map((nav, index) => {
        return (
          <NavButton
            key={index}
            {...nav}
            highlight={location.pathname === nav.src}
          />
        )
      })}
    </NavContainer>
  )
}

export default function BaseLayout({ children }) {
  return (
    <Container>
      <ChildrenContainer>{children}</ChildrenContainer>
      <Nav />
    </Container>
  )
}
