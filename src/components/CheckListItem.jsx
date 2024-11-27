import styled from "styled-components"
import { Checkbox } from "antd"
import { useState } from "react"
import { motion } from "framer-motion"

const CheckListItem = styled(Checkbox)`
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 8px 20px;
  color: #fff;
  background-color: #2c2c2c;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  overflow: hidden;
  & .ant-checkbox-inner {
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

const usingTokenCheckListItem = ({
  defaultChecked,
  checked,
  onChange,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked ?? checked)
  return (
    <motion.div layoutId={props.value}>
      <CheckListItem
        {...props}
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked)
          onChange && onChange(e)
        }}
        style={{
          background: isChecked ? "#15373D" : "#2c2c2c",
        }}
      />
    </motion.div>
  )
}

export default usingTokenCheckListItem
