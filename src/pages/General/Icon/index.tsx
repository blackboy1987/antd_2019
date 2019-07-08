import {
  Card,
  Tabs,
} from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import router from 'umi/router';

const { TabPane } = Tabs;
// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  callback=(key:string) => {
    router.push(`/general/icon/${key}`);
  };

  render() {
    const { children } = this.props;
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Tabs onChange={this.callback}>
            <TabPane tab="基本用法" key="01" />
            <TabPane tab="基本多色图标用法" key="02" />
            <TabPane tab="自定义图标" key="03" />
            <TabPane tab="使用 iconfont.cn" key="04" />
          </Tabs>
          {children}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
