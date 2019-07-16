import {
  Typography,
  Breadcrumb,
  Menu,
} from 'antd';

import React, { Component } from 'react';

const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const menus = (
      <Menu>
        <Menu.Item>
          <a href="http://www.i-gomall.com" rel="noopener noopener" target="_blank">item1</a></Menu.Item>
        <Menu.Item>item2</Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Typography>
          <Paragraph>
            面包屑支持下拉菜单。
          </Paragraph>
        </Typography>
        <Breadcrumb>
          <Breadcrumb.Item href="https://ant.design/">Ant Design</Breadcrumb.Item>
          <Breadcrumb.Item>Component</Breadcrumb.Item>
          <Breadcrumb.Item overlay={menus}>General</Breadcrumb.Item>
          <Breadcrumb.Item>Button</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
export default Index;
