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
    router.push(`/dataInput/form/${key}`);
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
            <TabPane tab="水平登录栏" key="01" />
            <TabPane tab="登录框" key="02" />
            <TabPane tab="注册新用户" key="03" />
            <TabPane tab="高级搜索" key="04" />
            <TabPane tab="弹出层中的新建表单" key="05" />
            <TabPane tab="动态增减表单项" key="06" />
            <TabPane tab="时间类控件" key="07" />
            <TabPane tab="自定义表单控件" key="08" />
            <TabPane tab="表单数据存储于上层组件" key="09" />
            <TabPane tab="自行处理表单数据" key="10" />
            <TabPane tab="自定义校验" key="11" />
            <TabPane tab="表单联动" key="12" />
            <TabPane tab="表单布局" key="13" />
            <TabPane tab="动态校验规则" key="14" />
            <TabPane tab="校验其他组件" key="15" />
          </Tabs>
          {children}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
