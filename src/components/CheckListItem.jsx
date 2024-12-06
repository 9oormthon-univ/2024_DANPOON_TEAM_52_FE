import styled from "styled-components"
import { Checkbox, Flex } from "antd"
import { useState, useRef } from "react"
import { motion } from "framer-motion"

const CheckListItemContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  margin: 0px;
  cursor: pointer;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  & > * {
    scroll-snap-align: end;
  }
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`
const InnerContainer = styled(Checkbox)`
  position: relative;
  min-width: 100%;
  height: fit-content;
  padding: 8px 20px;
  color: #fff;
  background-color: #2c2c2c;
  font-size: 15px;
  font-weight: 500;
  overflow: hidden;
  & .ant-checkbox-inner {
    display: ${({ $checkboxVisible }) => ($checkboxVisible ? "block" : "none")};
    background-color: #000;
    outline: none;
    border: none;
  }
  &&& .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #000 !important;
  }
  &&& .ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: #8afaf1;
  }
`
const EditButton = styled.button`
  color: #fff;
  padding: 0 20px;
  font-size: 13px;
  font-weight: 600;
  background-color: #4d4d4d;
  border: none;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
`
const DeleteButton = styled.button`
  padding: 0 20px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  background-color: #d94242;
  border: none;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
`

const CheckListItem = ({
  defaultChecked,
  checked,
  onChange,
  onEdit,
  onDelete,
  option,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked ?? checked)
  const listItemRef = useRef(null)
  const eventHandler = (func) => {
    listItemRef.current.scrollTo({ behavior: "smooth", left: 0 })
    func()
  }
  return (
    <CheckListItemContainer layoutId={props.value} ref={listItemRef}>
      <InnerContainer
        {...props}
        $checkboxVisible={option?.$checkboxVisible ?? true}
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked)
          onChange && onChange(e)
        }}
        style={{
          background: isChecked ? "#15373D" : "#2c2c2c",
        }}
      />
      <Flex>
        {option?.editVisible && (
          <EditButton onClick={() => eventHandler(onEdit)}>수정</EditButton>
        )}
        {option?.deleteVisible && (
          <DeleteButton onClick={() => eventHandler(onDelete)}>
            삭제
          </DeleteButton>
        )}
      </Flex>
    </CheckListItemContainer>
  )
}

export default CheckListItem
