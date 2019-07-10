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
            span pull push offset order 属性可以通过内嵌到 xs sm md lg xl xxl 属性中来使用。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
