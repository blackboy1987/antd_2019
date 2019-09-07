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
            密码框，版本 3.12.0 中新增。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
