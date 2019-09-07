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
            普通的登录框，可以容纳更多的元素。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
