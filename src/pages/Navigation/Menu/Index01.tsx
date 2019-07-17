import {
  Typography,
  Menu,
  Icon,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            水平的顶部导航菜单。
          </Paragraph>
        </Typography>
        <Menu mode="horizontal">
          <Menu.Item>
            <Icon type="mail" />
            Navigation One
          </Menu.Item>
          <Menu.Item disabled>
            <Icon type="appstore" />
            Navigation One
          </Menu.Item>
          <Menu.SubMenu title={<span><Icon type="user" />Navigation Three - Submenu</span>}>
            <Menu.ItemGroup title="Item 1">
              <Menu.Item>Option 1</Menu.Item>
              <Menu.Item>Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item>Option 3</Menu.Item>
              <Menu.Item>Option 4</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Menu.Item>
            <a href="http://mall.igomall.xin" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default Index;
