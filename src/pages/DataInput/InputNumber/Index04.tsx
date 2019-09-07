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
            和原生的数字输入框一样，value 的精度由 step 的小数位数决定。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
