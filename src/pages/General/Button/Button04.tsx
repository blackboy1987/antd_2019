import {
  Typography,
  Button,
} from 'antd';
import React, { Component } from 'react';

const { Paragraph } = Typography;
class Button03 extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
          </Paragraph>
        </Typography>
        <Button type="primary">primary</Button>
        <Button type="primary" disabled>primary</Button>
        <Button>default</Button>
        <Button disabled>default</Button>
        <Button type="danger">danger</Button>
        <Button type="danger" disabled>danger</Button>
        <Button type="link">link</Button>
        <Button type="link" disabled>link</Button>
        <Button type="dashed">dashed</Button>
        <Button type="dashed" disabled>dashed</Button>
      </div>
    );
  }
}
export default Button03;
