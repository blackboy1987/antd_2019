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
            可以简单配置几种等分栅格和间距。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
