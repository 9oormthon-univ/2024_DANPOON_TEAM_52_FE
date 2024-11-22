import styled from "styled-components"

const ShadowContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: calc(100% - 20px);
    height: 30px;
    pointer-events: none;
    z-index: 1;
  }

  &::before {
    top: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent);
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
  }
`

export default ShadowContainer
