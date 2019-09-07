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
            可以预设常用的日期范围以提高用户体验。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
