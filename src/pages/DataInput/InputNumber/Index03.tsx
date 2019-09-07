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
            点击按钮切换可用状态。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
