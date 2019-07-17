import {
  Typography,
  Menu,
  Icon,
  Button,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state={
    collapsed: false,
  };

  changeCollapsed = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div>
        <Typography>
          <Paragraph>
            内嵌菜单可以被缩起/展开。
            <br/>
            你可以在 Layout 里查看侧边布局结合的完整示例。
          </Paragraph>
        </Typography>
        <Button type="primary" onClick={this.changeCollapsed}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'}/>
        </Button>
        <br/>
        <br/>
        <div style={{ width: 256 }}>
          <Menu
            theme="dark"
            mode="inline"
            inlineCollapsed={collapsed}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>Option 3</span>
            </Menu.Item>
            <Menu.SubMenu
              key="sub1"
              title={
                <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="sub2"
              title={
                <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
              }
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
          </Menu>
        </div>
      </div>
    );
  }
}
export default Index;
