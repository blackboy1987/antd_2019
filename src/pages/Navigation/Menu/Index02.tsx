import {
  Typography,
  Menu,
  Icon,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  handleClick= (e:any) => {
    console.log(e.key);
  };

  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            垂直菜单，子菜单内嵌在菜单区域。
          </Paragraph>
        </Typography>
        <Menu
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          defaultSelectedKeys={['1']}
          mode="inline"
          onClick={this.handleClick}
        >
          <Menu.SubMenu key="sub1" title={<span><Icon type="mail" />Navigation One</span>}>
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item>Option 3</Menu.Item>
              <Menu.Item>Option 4</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Menu.SubMenu title={<span><Icon type="appstore" />Navigation One</span>}>
            <Menu.Item>Option 5</Menu.Item>
            <Menu.Item>Option 6</Menu.Item>
            <Menu.SubMenu title="SubMenu">
              <Menu.Item>Option 7</Menu.Item>
              <Menu.Item>Option 8</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.SubMenu title={<span><Icon type="setting" />Navigation Three</span>}>
            <Menu.Item>Option 9</Menu.Item>
            <Menu.Item>Option 10</Menu.Item>
            <Menu.Item>Option 11</Menu.Item>
            <Menu.Item>Option 12</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    );
  }
}
export default Index;
