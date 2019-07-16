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
  // @ts-ignore
  onClick = ({ key }) => {
    console.log(key);
  };

  render() {
    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd memu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Typography>
          <Paragraph>
            点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。
          </Paragraph>
        </Typography>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Hover me, Click menu item <Icon type="down" />
          </a>
        </Dropdown>,
      </div>
    );
  }
}
export default Index;
