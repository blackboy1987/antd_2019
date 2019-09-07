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
    router.push(`/dataInput/cascader/${key}`);
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
            <TabPane tab="基本" key="01" />
            <TabPane tab="默认值" key="02" />
            <TabPane tab="可以自定义显示" key="03" />
            <TabPane tab="移入展开" key="04" />
            <TabPane tab="禁用选项" key="05" />
            <TabPane tab="选择即改变" key="06" />
            <TabPane tab="大小" key="07" />
            <TabPane tab="自定义已选项" key="08" />
            <TabPane tab="搜索" key="09" />
            <TabPane tab="自定义字段名" key="10" />
            <TabPane tab="动态加载选项" key="11" />
          </Tabs>
          {children}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
