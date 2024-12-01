import styled from "styled-components"
export const DropdownWrapper = styled.div`
  width: 300px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "Pretendard", sans-serif;
`

export const DropdownHeader = styled.div`
  background-color: #262626;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: semibold;
  color: #c3c3c3;

  &:hover {
    background-color: #303030;
  }
`

export const DropdownArrow = styled.span`
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.1s ease-in-out;
`

export const DropdownMenu = styled.ul`
  background-color: #1a1a1a;
  color: white;
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  width: 100%;
  max-height: ${(props) => (props.isOpen ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 100;
  &.open {
    display: block;
  }
  &.closed {
    display: none;
  }
`

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  font-size: 14px;
  border-bottom: 1px solid #333;
  cursor: pointer;

  &:hover {
    background-color: #303030;
  }

  &:last-child {
    border-bottom: none;
  }

  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`
