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
            同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
