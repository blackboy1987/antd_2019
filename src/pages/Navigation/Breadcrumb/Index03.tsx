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
            和 react-router@2 react-router@3 进行结合使用。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
