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
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>
          3rd menu item（disabled）
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Typography>
          <Paragraph>
            分割线和不可用菜单项。
          </Paragraph>
        </Typography>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Hover me <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    );
  }
}
export default Index;
