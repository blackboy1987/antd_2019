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
            我们为 {'<Input />'} 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
