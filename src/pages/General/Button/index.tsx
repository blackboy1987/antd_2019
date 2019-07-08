import {
  Card,
  Tabs,
} from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import router from 'umi/router';

const { TabPane } = Tabs;
class Index extends Component {
  callback=(key:string) => {
    router.push(`/general/button/${key}`);
  };

  render() {
    const { children } = this.props;
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Tabs onChange={this.callback}>
            <TabPane tab="按钮类型" key="01" />
            <TabPane tab="图标按钮" key="02" />
            <TabPane tab="按钮尺寸" key="03" />
            <TabPane tab="不可用状态" key="04" />
            <TabPane tab="加载中状态" key="05" />
            <TabPane tab="多个按钮组合" key="06" />
            <TabPane tab="按钮组合" key="07" />
            <TabPane tab="幽灵按钮" key="08" />
            <TabPane tab="block 按钮" key="09" />
          </Tabs>
          {children}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
