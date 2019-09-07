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
    router.push(`/dataInput/input/${key}`);
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
            <TabPane tab="基本使用" key="01" />
            <TabPane tab="三种大小" key="02" />
            <TabPane tab="前置/后置标签" key="03" />
            <TabPane tab="输入框组合" key="04" />
            <TabPane tab="搜索框" key="05" />
            <TabPane tab="文本域" key="06" />
            <TabPane tab="适应文本高度的文本域" key="07" />
            <TabPane tab="输入时格式化展示" key="08" />
            <TabPane tab="前缀和后缀" key="09" />
            <TabPane tab="密码框" key="10" />
            <TabPane tab="带移除图标" key="11" />
          </Tabs>
          {children}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
