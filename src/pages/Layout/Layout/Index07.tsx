import {
  Typography,
  Layout,
  Menu,
  Icon,
} from 'antd';

import React, { Component } from 'react';

const { Header, Content, Sider, Footer } = Layout;

const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            Layout.Sider 支持响应式布局。
            <br/>
            说明：配置 breakpoint 属性即生效，视窗宽度小于 breakpoint 时 Sider 缩小为 collapsedWidth 宽度，若将 collapsedWidth 设置为零，会出现特殊 trigger。
          </Paragraph>
        </Typography>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="user" />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>,
      </div>
    );
  }
}
export default Index;
