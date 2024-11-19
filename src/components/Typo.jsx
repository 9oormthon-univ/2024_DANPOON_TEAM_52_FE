import styled from "styled-components"

import { Typography } from "antd"

export const Title = styled(Typography.Title)`
  &&& {
    font-size: 24px;
    font-weight: 600;
    color: white;
  }
`

export const Text = styled(Typography.Paragraph)`
  &&& {
    font-size: 15px;
    color: white;
    font-weight: 400;
  }
`

export default {
  Title,
  Text,
}
