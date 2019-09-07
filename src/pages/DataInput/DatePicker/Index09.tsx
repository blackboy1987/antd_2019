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
            在浮层中加入额外的页脚，以满足某些定制信息的需求。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
