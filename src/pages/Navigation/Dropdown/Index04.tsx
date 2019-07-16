import {
  Typography,
  Menu,
  Dropdown,
  Icon,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Typography>
          <Paragraph>
            默认是移入触发菜单，可以点击触发。
          </Paragraph>
        </Typography>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            Click me <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    );
  }
}
export default Index;
