import styled from "styled-components";

import { Typography } from "antd";

export const Title = styled(Typography.Title)`
  &&& {
    font-size: 24px;
    font-weight: bold;
    color: white;
    font-family: "Pretendard-Regular";
  }
`;

export const Text = styled(Typography.Paragraph)`
  &&& {
    font-size: 15px;
    font-family: "Pretendard-Regular";
    color: white;
  }
`;

export default {
  Title,
  Text
};
