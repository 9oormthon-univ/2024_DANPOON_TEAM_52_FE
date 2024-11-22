import { styled } from "styled-components"

const ScrollContainer = styled.div`
  overflow: auto;
  padding-right: 20px;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #2f2f2f;
    border-radius: 10px;
  }
`

export default ScrollContainer
