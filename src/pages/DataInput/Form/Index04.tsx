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
            三列栅格式的表单排列方式，常用于数据表格的高级搜索。

            有部分定制的样式代码，由于输入标签长度不确定，需要根据具体情况自行调整。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
