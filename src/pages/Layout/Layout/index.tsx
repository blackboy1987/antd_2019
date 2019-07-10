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
  state={
    activeKey: '01',
  };

  componentDidMount(): void {
    // @ts-ignore
    const { history: { location: { pathname = '' } }, match: { path = '' } } = this.props;
    this.setState({
      activeKey: `${pathname.substring(path.length + 1)}`,
    });
  }

  callback=(key:string) => {
    router.push(`/layout/layout/${key}`);
    this.setState({
      activeKey: key,
    });
  };

  render() {
    const { children } = this.props;
    const { activeKey } = this.state;
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Tabs onChange={this.callback} activeKey={activeKey}>
            <TabPane tab="基本结构" key="01" />
            <TabPane tab="上中下布局" key="02" />
            <TabPane tab="顶部-侧边布局-通栏" key="03" />
            <TabPane tab="顶部-侧边布局" key="04" />
            <TabPane tab="侧边布局" key="05" />
            <TabPane tab="自定义触发器" key="06" />
            <TabPane tab="响应式布局" key="07" />
            <TabPane tab="固定头部" key="08" />
            <TabPane tab="固定侧边栏" key="09" />
          </Tabs>
          {children}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
