import {
  Typography,
  Steps,
  Icon,
} from 'antd';

import React, { Component } from 'react';


const { Paragraph } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Index extends Component {
  render() {
    const customProgressDot = (iconDot, {index, status, title, description}) => (
      <Icon type="book" style={{ color:"red" }} />
      );

    return (
      <div>
        <Typography>
          <Paragraph>
            包含步骤点的进度条。
          </Paragraph>
        </Typography>
        <Steps progressDot={customProgressDot} current={1}>
          <Steps.Step title="Finished" description="This is a description." />
          <Steps.Step title="In Progress" description="This is a description." />
          <Steps.Step title="Waiting" description="This is a description." />
        </Steps>
      </div>
    );
  }
}
export default Index;
