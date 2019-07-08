import {
  Card,
  Tabs,
} from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Index01 from './Index01';
import Index02 from './Index02';
import Index03 from './Index03';
import Index04 from './Index04';

const { TabPane } = Tabs;
// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Tabs>
            <TabPane tab="基本用法" key="1">
              <Index01 />
            </TabPane>
            <TabPane tab="基本多色图标用法" key="2">
              <Index02 />
            </TabPane>
            <TabPane tab="自定义图标" key="3">
              <Index03 />
            </TabPane>
            <TabPane tab="使用 iconfont.cn" key="4">
              <Index04 />
            </TabPane>

          </Tabs>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
