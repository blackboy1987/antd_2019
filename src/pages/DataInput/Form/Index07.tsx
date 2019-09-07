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
            时间类组件的 value 类型为 moment 对象，所以在提交服务器前需要预处理。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
