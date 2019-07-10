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
            一般用于固定顶部导航，方便页面切换。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
