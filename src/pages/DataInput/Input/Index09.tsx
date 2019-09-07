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
            在输入框上添加前缀或后缀图标。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
