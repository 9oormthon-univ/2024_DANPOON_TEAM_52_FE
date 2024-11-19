import { Flex } from "antd"
import Constellation from "../../../components/Constellation"
import { Container } from "./styled"

export default function CompleteGoals() {
  return (
    <Flex
      style={{
        width: "100%",
        flex: 1,
        overflow: "scroll",
      }}
    >
      <Flex flex={1} vertical>
        {new Array(4).fill().map((_, index) => (
          <Constellation key={index} id={0} starCount={index + 3} />
        ))}
      </Flex>
      <Flex flex={1} vertical>
        {new Array(4).fill().map((_, index) => (
          <Constellation key={index} id={1} starCount={index + 3} />
        ))}
      </Flex>
    </Flex>
  )
}
