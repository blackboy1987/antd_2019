import {
  Typography,
  PageHeader,
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
            标准页头，适合使用在需要简单描述的场景。
          </Paragraph>
        </Typography>
        <PageHeader title="title" subTitle="this is subtitle" />
      </div>
    );
  }
}
export default Index;
