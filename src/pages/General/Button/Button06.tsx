import {
  Typography,
  Button,
  Dropdown,
  Menu,
} from 'antd';

import React, { Component } from 'react';

const { Paragraph } = Typography;

class Button06 extends Component {
  render() {
    const menus = (
      <Menu>
        <Menu.Item>menu 1</Menu.Item>
        <Menu.Item>menu 2</Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Typography>
          <Paragraph>
            按钮组合使用时，推荐使用 1 个主操作 + n 个次操作，3 个以上操作时把更多操作放到 Dropdown.Button 中组合使用。
          </Paragraph>
        </Typography>
        <Button type="primary">primary</Button>
        <Button >default</Button>
        <Dropdown overlay={menus}>
          <Button>more</Button>
        </Dropdown>
      </div>
    );
  }
}
export default Button06;
