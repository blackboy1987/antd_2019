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
            要使用自定义触发器，可以设置 trigger={null} 来隐藏默认设定。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
