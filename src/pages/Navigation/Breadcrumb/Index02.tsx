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
            图标放在文字前面。
          </Paragraph>
        </Typography>
        <Breadcrumb>
          <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
          <Breadcrumb.Item><Icon type="user" />Application List</Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
export default Index;
