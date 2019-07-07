import {
  Card,
  Tabs,
} from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Button01 from './Button01';
import Button02 from './Button02';
import Button03 from './Button03';
import Button04 from './Button04';
import Button05 from './Button05';
import Button06 from './Button06';
import Button07 from './Button07';
import Button08 from './Button08';
import Button09 from './Button09';

const { TabPane } = Tabs;
class Index extends Component {

  state = {
    key: '按钮类型',
    noTitleKey: '按钮类型',
  };

  callback=(key:string)=>{
    console.log(key);
  };

  render() {
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="按钮类型" key="1">
              <Button01 />
            </TabPane>
            <TabPane tab="图标按钮" key="2">
              <Button02 />
            </TabPane>
            <TabPane tab="按钮尺寸" key="3">
              <Button03 />
            </TabPane>
            <TabPane tab="不可用状态" key="4">
              <Button04 />
            </TabPane>
            <TabPane tab="加载中状态" key="5">
              <Button05 />
            </TabPane>
            <TabPane tab="多个按钮组合" key="6">
              <Button06 />
            </TabPane>
            <TabPane tab="按钮组合" key="7">
              <Button07 />
            </TabPane>
            <TabPane tab="幽灵按钮" key="8">
              <Button08 />
            </TabPane>
            <TabPane tab="block 按钮" key="9">
              <Button09 />
            </TabPane>




          </Tabs>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Index;
