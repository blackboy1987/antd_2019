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
            以上演示没有出现的表单控件对应的校验演示。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
