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
            拥有顶部导航及侧边栏的页面，多用于展示类网站。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
