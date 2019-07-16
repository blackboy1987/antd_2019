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
    router.push(`/navigation/breadcrumb/${key}`);
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
            <TabPane tab="带有图标的" key="02" />
            <TabPane tab="react-router" key="03" />
            <TabPane tab="其它路由" key="04" />
            <TabPane tab="分隔符" key="05" />
            <TabPane tab="带下拉菜单的面包屑" key="06" />
          </Tabs>
          {children}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
