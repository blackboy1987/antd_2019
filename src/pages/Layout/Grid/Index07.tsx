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
            通过 Flex 布局的 Order 来改变元素的排序。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
