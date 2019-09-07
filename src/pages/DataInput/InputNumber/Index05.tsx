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
            通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
