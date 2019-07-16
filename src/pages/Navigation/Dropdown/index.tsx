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
    router.push(`/navigation/dropdown/${key}`);
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
            <TabPane tab="弹出位置" key="02" />
            <TabPane tab="其他元素" key="03" />
            <TabPane tab="触发方式" key="04" />
            <TabPane tab="触发事件" key="05" />
            <TabPane tab="带下拉框的按钮" key="06" />
            <TabPane tab="多级菜单" key="07" />
            <TabPane tab="菜单隐藏方式" key="08" />
            <TabPane tab="右键菜单" key="09" />
          </Tabs>
          {children}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
