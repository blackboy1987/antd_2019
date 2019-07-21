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
            基本使用。通过 dataSource 设置自动完成的数据源
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
