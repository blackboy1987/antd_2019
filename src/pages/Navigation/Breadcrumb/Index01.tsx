import {
  Typography,
  Breadcrumb,
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
            最简单的用法。
          </Paragraph>
        </Typography>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Application Center</Breadcrumb.Item>
          <Breadcrumb.Item>Application List</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
export default Index;
