import {
  Typography,
  Breadcrumb,
  Icon,
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
            使用 {'separator=">"'} 可以自定义分隔符。
          </Paragraph>
          <Breadcrumb separator={<Icon type="home" />}>
            <Breadcrumb.Item>home</Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
            <Breadcrumb.Item>Application List</Breadcrumb.Item>
          </Breadcrumb>
        </Typography>
      </div>
    );
  }
}
export default Index;
