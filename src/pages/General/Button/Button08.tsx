import {
  Typography,
  Button,
} from 'antd';

import React, { Component } from 'react';

const { Paragraph } = Typography;

class Button03 extends Component {
  render() {
    return (
      <div style={{ background: 'green' }}>
        <Typography>
          <Paragraph>
            幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
          </Paragraph>
        </Typography>
        <Button type="primary" ghost>primary</Button>
        <Button ghost>default</Button>
        <Button type="dashed" ghost>dashed</Button>
        <Button type="danger" ghost>danger</Button>
        <Button type="link" ghost>danger</Button>
      </div>
    );
  }
}
export default Button03;
