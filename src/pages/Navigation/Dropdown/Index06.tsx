import {
  Typography,
  Dropdown,
  Menu,
  Icon,
  Button,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    const menus = (
      <Menu >
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd memu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Typography>
          <Paragraph>
            左边是按钮，右边是额外的相关功能菜单。可设置 icon 属性来修改右边的图标。
          </Paragraph>
        </Typography>
        <Dropdown.Button overlay={menus}>
          Button1
        </Dropdown.Button>
        <Dropdown.Button overlay={menus} icon={<Icon type="user" />}>
          Button2
        </Dropdown.Button>
        <Dropdown.Button disabled overlay={menus} icon={<Icon type="user" />}>
          Button3
        </Dropdown.Button>
        <Dropdown overlay={menus}>
          <Button>Button4</Button>
        </Dropdown>
      </div>
    );
  }
}
export default Index;
