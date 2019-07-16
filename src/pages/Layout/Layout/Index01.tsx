import {
  Typography,
  Layout,
} from 'antd';

import React, { Component } from 'react';

import styles from './index.less';

const { Header, Content, Footer, Sider } = Layout;

const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            典型的页面布局。
          </Paragraph>
        </Typography>
        <Layout>
          <Header className={styles.header}>header</Header>
          <Content className={styles.content}>content</Content>
          <Footer className={styles.footer}>footer</Footer>
        </Layout>
        <hr/>
        <Layout>
          <Header className={styles.header}>header</Header>
          <Layout>
            <Sider className={styles.sider}>sider</Sider>
            <Content className={styles.content}>content</Content>
          </Layout>
          <Footer className={styles.footer}>footer</Footer>
        </Layout>
        <hr/>
        <Layout>
          <Header className={styles.header}>header</Header>
          <Layout>
            <Content className={styles.content}>content</Content>
            <Sider className={styles.sider}>sider</Sider>
          </Layout>
          <Footer className={styles.footer}>footer</Footer>
        </Layout>
        <hr/>
        <Layout>
          <Sider className={styles.sider}>sider</Sider>
          <Layout>
            <Header className={styles.header}>header</Header>
            <Content className={styles.content}>content</Content>
            <Footer className={styles.footer}>footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Index;
