import {
  Typography,
  Dropdown,
  Menu,
  Icon,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>menu1</Menu.Item>
        <Menu.SubMenu title="menu2">
          <Menu.Item>menu2-1</Menu.Item>
          <Menu.Item>menu2-2</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item>menu3</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Typography>
          <Paragraph>
            传入的菜单里有多个层级。
          </Paragraph>
        </Typography>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Cascading menu <Icon type="down" />
          </a>
        </Dropdown>,
      </div>
    );
  }
}
export default Index;
