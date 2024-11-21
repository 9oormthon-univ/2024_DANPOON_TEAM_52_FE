import { styled } from "styled-components"
import { Radio } from "antd"

const TabsHeaderContainer = styled(Radio.Group)`
  position: relative;
  display: flex;
  background-color: #262626;
  width: 100%;
  border-radius: 25px;
  overflow: hidden;
`

const TabsHeaderItem = styled(Radio.Button)`
  &&& {
    font-family: "Pretendard";
    font-size: 13px;
    font-weight: 600;
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    text-align: center;
    color: #7d7d7d;
    padding: 5px 0;
    height: auto;
    z-index: 1;
    overflow: hidden;
  }
  &&&::before {
    display: none;
  }
  &&&.ant-radio-button-wrapper-checked {
    color: #000;
    border-radius: 25px;
  }
`
const Glider = styled.div`
  position: absolute;
  width: calc(100% / ${(props) => props.$length});
  height: 100%;
  background: linear-gradient(90deg, #7b80ff -16.96%, #8afaf1 74.78%);
  border-radius: 25px;
  transition: 0.25s ease-out;
  transform: translateX(${(props) => props.$index * 100}%);
`
export const TabsHeader = ({ tabs, value, onChange }) => {
  return (
    <TabsHeaderContainer defaultValue={value}>
      {tabs.map((tab, index) => (
        <TabsHeaderItem
          key={index}
          value={index}
          onChange={() => {
            onChange(index)
          }}
        >
          {tab.title}
        </TabsHeaderItem>
      ))}
      <Glider $length={tabs.length} $index={value} />
    </TabsHeaderContainer>
  )
}

export const TabsContent = ({ tabs, value }) => {
  return <>{tabs[value].content}</>
}
