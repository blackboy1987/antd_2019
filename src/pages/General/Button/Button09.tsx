import {
  Typography,
  Button,
  ConfigProvider,
} from 'antd';

import React, { Component } from 'react';

const { Paragraph } = Typography;

class Button09 extends Component {
  render() {
    return (
      <div style={{ border: 'solid 1px red' }}>
        <Typography>
          <Paragraph>
            block属性将使按钮适合其父宽度。
          </Paragraph>
        </Typography>
        <Button type="primary" block>primary</Button>
        <div style={{ width: '30%', border: 'solid 1px green' }}>
          <Button type="danger" block>danger</Button>
        </div>
        <Button type="primary">汉字</Button>
        <br/>
        <ConfigProvider autoInsertSpaceInButton={false}>
          <Button type="primary">汉字</Button>
        </ConfigProvider>
        <br/>
        <Button type="primary">我&nbsp;汉字</Button>
      </div>
    );
  }
}
export default Button09;
