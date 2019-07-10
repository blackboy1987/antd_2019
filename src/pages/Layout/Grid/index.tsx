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
    console.log(this.props);
    // @ts-ignore
    const { history: { location: { pathname = '' } }, match: { path = '' } } = this.props;
    this.setState({
      activeKey: `${pathname.substring(path.length + 1)}`,
    });
  }

  callback=(key:string) => {
    router.push(`/layout/grid/${key}`);
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
            <TabPane tab="基础栅格" key="01" />
            <TabPane tab="区块间隔" key="02" />
            <TabPane tab="左右偏移" key="03" />
            <TabPane tab="栅格排序" key="04" />
            <TabPane tab="Flex 布局" key="05" />
            <TabPane tab="Flex 对齐" key="06" />
            <TabPane tab="Flex 排序" key="07" />
            <TabPane tab="响应式布局" key="08" />
            <TabPane tab="其他属性的响应式" key="09" />
            <TabPane tab="栅格配置器" key="10" />
          </Tabs>
          {children}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
