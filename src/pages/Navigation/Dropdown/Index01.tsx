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
    const menus = (
      <Menu>
        <Menu.Item>menu1</Menu.Item>
        <Menu.Item>menu2</Menu.Item>
        <Menu.Divider/>
        <Menu.Item disabled>menu3</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Typography>
          <Paragraph>
            最简单的下拉菜单。
          </Paragraph>
        </Typography>
        <Dropdown overlay={menus}>
          <a className="ant-dropdown-link" href="#">
            Hover me <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    );
  }
}
export default Index;
