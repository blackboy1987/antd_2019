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
            参照 Bootstrap 的 响应式设计，预设六个响应尺寸：xs sm md lg xl  xxl。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
