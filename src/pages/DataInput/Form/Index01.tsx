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
            水平登录栏，常用在顶部导航栏中。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
