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
            Layout.Sider 支持响应式布局。
            <br/>
            说明：配置 breakpoint 属性即生效，视窗宽度小于 breakpoint 时 Sider 缩小为 collapsedWidth 宽度，若将 collapsedWidth 设置为零，会出现特殊 trigger。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
