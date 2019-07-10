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
            典型的页面布局。
          </Paragraph>
        </Typography>

      </div>
    );
  }
}
export default Index;
