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
            结合 Tooltip 组件，实现一个数值输入框，方便内容超长时的全量展现。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
