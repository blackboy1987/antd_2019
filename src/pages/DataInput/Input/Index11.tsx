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
            带移除图标的输入框，点击图标删除所有内容。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
