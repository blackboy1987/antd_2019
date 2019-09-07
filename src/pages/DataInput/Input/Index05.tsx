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
            带有搜索按钮的输入框，2.5.0 时新增。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
