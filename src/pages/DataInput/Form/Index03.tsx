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
            用户填写必须的信息以注册新用户。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
