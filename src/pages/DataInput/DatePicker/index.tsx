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
    router.push(`/dataInput/datePicker/${key}`);
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
            <TabPane tab="日期格式" key="02" />
            <TabPane tab="三种大小" key="03" />
            <TabPane tab="日期时间选择" key="04" />
            <TabPane tab="禁用" key="05" />
            <TabPane tab="不可选择日期和时间" key="06" />
            <TabPane tab="自定义日期范围选择" key="07" />
            <TabPane tab="预设范围" key="08" />
            <TabPane tab="额外的页脚" key="09" />
            <TabPane tab="受控面板" key="10" />
            <TabPane tab="定制日期单元格" key="11" />
          </Tabs>
          {children}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
