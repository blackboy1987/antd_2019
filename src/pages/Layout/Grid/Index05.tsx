import {
  Typography,
} from 'antd';
import React, { Component } from 'react';

const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    return (
      <div>
        <Typography>
          <Paragraph>
            Flex 布局基础。
            <br/>
            使用 row-flex 定义 flex 布局，其子元素根据不同的值 start,center,end,space-between,space-around，分别定义其在父节点里面的排版方式。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
