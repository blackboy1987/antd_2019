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
    router.push(`/navigation/steps/${key}`);
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
            <TabPane tab="基本用法" key="01" />
            <TabPane tab="迷你版" key="02" />
            <TabPane tab="带图标的步骤条" key="03" />
            <TabPane tab="步骤切换" key="04" />
            <TabPane tab="竖直方向的步骤条" key="05" />
            <TabPane tab="竖直方向的小型步骤条" key="06" />
            <TabPane tab="步骤运行错误" key="07" />
            <TabPane tab="点状步骤条" key="08" />
            <TabPane tab="自定义点状步骤条" key="09" />
            <TabPane tab="可点击" key="10" />
          </Tabs>
          {children}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
