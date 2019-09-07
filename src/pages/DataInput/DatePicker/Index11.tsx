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
            使用 dateRender 可以自定义日期单元格的内容和样式。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
