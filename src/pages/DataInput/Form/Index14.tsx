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
            根据不同情况执行不同的校验规则。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
