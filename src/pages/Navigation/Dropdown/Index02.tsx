import {
  Typography,
  Dropdown,
  Menu,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    const menus = (
      <Menu>
        <Menu.Item>item11111111111</Menu.Item>
        <Menu.Item>item22222222222</Menu.Item>
        <Menu.Item>item33333333333</Menu.Item>
        <Menu.Item>item44444444444</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Typography>
          <Paragraph>
            支持 6 个弹出位置。
          </Paragraph>
        </Typography>
        <Dropdown overlay={menus} placement="bottomLeft" overlayStyle={{ width: 100 }}>
          <a>bottomLeft</a>
        </Dropdown>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Dropdown overlay={menus} placement="bottomCenter">
          <a>bottomCenter</a>
        </Dropdown>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Dropdown overlay={menus} placement="bottomRight">
          <a>bottomRight</a>
        </Dropdown>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Dropdown overlay={menus} placement="topCenter">
          <a>topCenter</a>
        </Dropdown>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Dropdown overlay={menus} placement="topLeft">
          <a>topLeft</a>
        </Dropdown>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Dropdown overlay={menus} placement="topRight">
          <a>topRight</a>
        </Dropdown>
      </div>
    );
  }
}
export default Index;
