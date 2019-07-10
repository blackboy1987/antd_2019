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
            当内容较长时，使用固定侧边栏可以提供更好的体验。
          </Paragraph>
        </Typography>
      </div>
    );
  }
}
export default Index;
