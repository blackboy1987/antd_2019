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
  state={
    visible: true,
  };

  onVisibleChange=(visible:boolean) => {
    console.log(visible);
    this.setState({ visible });
  };

  // @ts-ignore
  onClick=({ key }) => {
    if (key === '1') {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: false,
      });
    }
  };

  render() {
    const { visible } = this.state;
    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="1">显示</Menu.Item>
        <Menu.Item key="2">隐藏</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Typography>
          <Paragraph>
            传入的菜单里有多个层级。
          </Paragraph>
        </Typography>
        <Dropdown overlay={menu} onVisibleChange={this.onVisibleChange} visible={visible}>
          <a className="ant-dropdown-link" href="#">
            Cascading menu <Icon type="down" />
          </a>
        </Dropdown>,
      </div>
    );
  }
}
export default Index;
