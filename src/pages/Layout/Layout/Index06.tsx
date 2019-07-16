import {
  Typography,
  Layout,
  Menu,
  Icon,
} from 'antd';

import React, { Component } from 'react';

const { Header, Content, Sider } = Layout;

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
    return (
      <div>
        <Typography>
          <Paragraph>
            要使用自定义触发器，可以设置 trigger={null} 来隐藏默认设定。
          </Paragraph>
        </Typography>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >content</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Index;
