import {
  Typography,
  Button,
} from 'antd';
import React, { Component } from 'react';

const { Paragraph } = Typography;

class Button01 extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
          </Paragraph>
        </Typography>
        <Button type="primary" style={{ marginRight: 8 }}>primary</Button>
        <Button style={{ marginRight: 8 }}>default</Button>
        <Button type="dashed" style={{ marginRight: 8 }}>dashed</Button>
        <Button type="danger" style={{ marginRight: 8 }}>danger</Button>
        <Button type="link" style={{ marginRight: 8 }}>link</Button>
        <a>link</a>
      </div>
    );
  }
}
export default Button01;
