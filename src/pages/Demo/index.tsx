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
            <TabPane tab="" key="01" />
            <TabPane tab="" key="02" />
            <TabPane tab="" key="03" />
            <TabPane tab="" key="04" />
            <TabPane tab="" key="05" />
            <TabPane tab="" key="06" />
            <TabPane tab="" key="07" />
            <TabPane tab="" key="08" />
            <TabPane tab="" key="09" />
            <TabPane tab="" key="10" />
            <TabPane tab="" key="11" />
            <TabPane tab="" key="12" />
            <TabPane tab="" key="13" />
            <TabPane tab="" key="14" />
            <TabPane tab="" key="15" />
            <TabPane tab="" key="16" />
            <TabPane tab="" key="17" />
            <TabPane tab="" key="18" />
            <TabPane tab="" key="19" />
            <TabPane tab="" key="20" />
            <TabPane tab="" key="21" />
            <TabPane tab="" key="22" />
            <TabPane tab="" key="23" />
            <TabPane tab="" key="24" />
            <TabPane tab="" key="25" />
          </Tabs>
          {children}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
