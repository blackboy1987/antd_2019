import {
  Typography,
} from 'antd';
import React, { Component } from 'react';

const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            Flex 子元素垂直对齐。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
