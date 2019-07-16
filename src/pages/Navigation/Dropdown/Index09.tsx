import {
  Typography,
  Menu,
  Dropdown,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Typography>
          <Paragraph>
            默认是移入触发菜单，可以点击鼠标右键触发。
          </Paragraph>
        </Typography>
        <Dropdown overlay={menu} trigger={['contextMenu']}>
          <span style={{ userSelect: 'none' }}>Right Click on Me</span>
        </Dropdown>
      </div>
    );
  }
}
export default Index;
